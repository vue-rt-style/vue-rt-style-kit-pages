<script type="text/jsx">
import documentation from '@vue-rt-style-kit-atoms-local/components/Button/docs/index.json';
import componentsList from '../../componentsList';
import Button from '@vue-rt-style-kit-atoms-local/components/Button/Button.vue';

export default {
  name: 'AppButtons',
  components: componentsList,
  data: () => ({
    documentation: {}
  }),
  mounted() {
    this.documentation = documentation;
  },
  created() {
  },
  methods: {},
  render() {
    return <div>
      <div class="rt-container">
        <rt-col size={12} class="app-content">
          <div class="app-title">
            <div class="row">
              <h1 class="rt-font-hero rt-col">
                Buttons <span class="rt-code rt-font-h3 rt-col"> .rt-button</span>
              </h1>
            </div>
          </div>


          <div class="app-row row">

            <setting-render docs={this.documentation.items} component={Button} html={`Подключить`}></setting-render>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button class='rt-button-purple'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button disabled class='rt-button-purple'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button class='rt-button-orange'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button disabled class='rt-button-orange'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button class='rt-button-purple-border'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button disabled class='rt-button-purple-border'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button class='rt-button-orange-border'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button disabled class='rt-button-orange-border'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button class='rt-button-gray'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button disabled class='rt-button-gray'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button class='rt-button-transparent'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button disabled class='rt-button-transparent'>Подключить</rt-button>"
                />
              </div>

            </div>


          </div>
          <div class="app-row row">
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :small='true' class='rt-button-purple'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button disabled :small='true' class='rt-button-purple'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :small='true' class='rt-button-orange'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button disabled :small='true' class='rt-button-orange'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :small='true' class='rt-button-purple-border'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button disabled :small='true' class='rt-button-purple-border'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :small='true' class='rt-button-orange-border'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button disabled :small='true' class='rt-button-orange-border'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :small='true' class='rt-button-gray'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button disabled :small='true' class='rt-button-gray'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :small='true' class='rt-button-transparent'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button disabled :small='true' class='rt-button-transparent'>Подключить</rt-button>"
                />
              </div>
            </div>
          </div>
        </rt-col>
      </div>

    <div class="color-block--dark-blue rt-space-vertical2">
      <div class="rt-container">
        <rt-col size={12}>
          <div class="app-row row">
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :bright='true' class='rt-button-purple'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled class='rt-button-purple'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :bright='true' class='rt-button-orange'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled class='rt-button-orange'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :bright='true' class='rt-button-purple-border'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled class='rt-button-purple-border'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :bright='true' class='rt-button-orange-border'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled class='rt-button-orange-border'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :bright='true' class='rt-button-gray'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled class='rt-button-gray'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :bright='true' class='rt-button-transparent'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled class='rt-button-transparent'>Подключить</rt-button>"
                />
              </div>

            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-space-top">
              <pre-code
                  text="<rt-button :bright='true' class='rt-button-white'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled class='rt-button-white'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-space-top">
              <pre-code
                  text="<rt-button :bright='true' class='rt-button-full-white'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled class='rt-button-full-white'>Подключить</rt-button>"
                />
              </div>
            </div>

          </div>
          <div class="app-row row">
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :bright='true' :small='true' class='rt-button-purple'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled :small='true' class='rt-button-purple'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :bright='true' :small='true' class='rt-button-orange'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled :small='true' class='rt-button-orange'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :bright='true' :small='true' class='rt-button-purple-border'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled :small='true' class='rt-button-purple-border'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :bright='true' :small='true' class='rt-button-orange-border'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled :small='true' class='rt-button-orange-border'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :bright='true' :small='true' class='rt-button-gray'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled :small='true' class='rt-button-gray'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-td-space-top">
              <pre-code
                  text="<rt-button :bright='true' :small='true' class='rt-button-transparent'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled :small='true' class='rt-button-transparent'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-space-top">
              <pre-code
                  text="<rt-button :bright='true' :small='true' class='rt-button-white'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled :small='true' class='rt-button-white'>Подключить</rt-button>"
                />
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-2 rt-col-md-3 flex-column d-flex rt-space-top">
              <pre-code
                  text="<rt-button :bright='true' :small='true' class='rt-button-full-white'>Подключить</rt-button>"
              />
              <div class="rt-space-top">
                <pre-code
                    text="<rt-button :bright='true' disabled :small='true' class='rt-button-full-white'>Подключить</rt-button>"
                />
              </div>
            </div>
          </div>
        </rt-col>
      </div>
    </div>
      <div class="rt-container rt-space-top">
        <rt-col size={12}>
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
              <pre-code text={`<rt-button :has-icon='true' class='rt-button rt-button-cool-grey-border'>
                <template slot='icon'>
                  <rt-icon type='user-silhouette' width='16' height='16' color='101828'/>
                </template>
                <template slot='button-text'>Подключить</template>
              </rt-button>`}
              />
            </div>
            <div class="d-inline-block rt-space-right">
              <rt-button has-icon={true}
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


          <div class="app-body rt-space-bottom">
            <div class="app-row row rt-space-top">
              <div class="rt-col-2 rt-col-md-3 rt-col-td-2 flex-column d-flex rt-md-space-top">
                <pre-code
                    text={`<rt-button :is-active="true" active-class="rt-button-purple" not-active-class="rt-button-purple-border" :checkboxBehavior="true">
              <template slot="not_active">Подключить</template>
              <template slot="active">Подключено</template>
              </rt-button>`}
                />
              </div>
              <div class="rt-col-2 rt-col-md-3 rt-col-td-2 flex-column d-flex rt-md-space-top">
                <pre-code
                    text={`<rt-button active-class="rt-button-purple" not-active-class="rt-button-purple-border" :checkboxBehavior="true">
              <template slot="not_active">Подключить</template>
              <template slot="active">Подключено</template>
              </rt-button>`}
                />
              </div>
              <div class="rt-col-2 rt-col-md-3 rt-col-td-2 flex-column d-flex rt-md-space-top">
                <pre-code
                    text={`<rt-button active-class="rt-button-purple" not-active-class="rt-button-purple-border" :checkboxBehavior="true">
              <template slot="not_active">Подключить</template>
              <template slot="active">Подключено</template>
              </rt-button>`}
                />
              </div>
            </div>
          </div>

          <div class="app-row row rt-space-top">

            <div class="rt-col-2 rt-col-md-3 rt-col-td-2 rt-md-space-top">
              <rt-button
                  smaller-padding={true} class="rt-button-orange rt-button-small" href="https://google.com">
                Перейти на сайт
              </rt-button>
            </div>
            <div class="rt-col-2 rt-col-md-3 rt-col-td-2 rt-md-space-top">
              <rt-button class="rt-button-orange" href="https://google.com">Перейти на сайт</rt-button>
            </div>
          </div>
          <div class="app-row row rt-space-top">
            <div class="rt-space-top25">
              <documentation-builder json={this.documentation} type="components"/>
            </div>
          </div>
        </rt-col>
      </div>
    </div>
  }
};
</script>

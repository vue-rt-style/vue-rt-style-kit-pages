<script type="text/jsx">
import { parse, stringify } from 'himalaya'

const componentsList = {};
import PreComponent from '../online-editor/PreComponent.vue'
import PreComponentEditor from '../online-editor/PreComponentEditor.vue'
import settingsRenderItem from './settingsRenderItem.vue'
import settingsRenderCode from './settingsCode.vue'
import './settingsRender.styl'

export default {
  name: 'settingRender',
  components: componentsList,
  props: {
    docs: {
      type: Array,
      default: () => []
    },
    component: {
      default: null
    },
    componentProps: {
      type: Object,
      default: () => new Object()

    },
    html: {
      type: String,
      defualt: ''
    },
    wrapMenu: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    componentDynamicProps: {},
    componentPropsSettingsName: [],
    componentPropsSettings: {},
    localHtml: '',
    parsedHtml: []


  }),
  computed: {
    grouppedArrayProps() {
      var group = (xs) => {
        return xs.reduce((rv, key) => {
          const i = this.componentPropsSettings[key]
          if (!rv[i.type.name]) {
            rv[i.type.name] = []
          }
          rv[i.type.name].push({component: i, key: key});
          return rv;
        }, {});
      };
      return group(this.componentPropsSettingsName)
    }
  },
  watch: {
    html(newVal, oldVal) {
      if (newVal != oldVal) {
        this.localHtml = this.html
        this.parseCode()
      }
    }
  },
  created() {
    this.localHtml = this.html
    this.parseCode();
    Object.keys(this.component.props).forEach((i) => {
      this.componentPropsSettings[i] = this.component.props[i];
      this.componentPropsSettingsName.push(i)
      if ('default' in this.componentPropsSettings[i]) {
        this.componentDynamicProps[i] = this.componentPropsSettings[i].default;
      }
      if (i in this.componentProps) {
        this.componentDynamicProps[i] = this.componentProps[i]
      }
    })
  },
  mounted() {
  },
  methods: {
    getDocsProps(key) {
      const label = this.camelToKebab(key);
      const item = this.docs.find(i => i.property.replace(':', '').search(label) == 0);
      if (item && item.variants) {
        return item.variants
      }
      return []
    },
    camelToKebab(text = '') {
      return text.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
    },
    getCodeEl() {
      const componentName = this.camelToKebab(this.component.name)
      const props = this.getProps();
      const attrs = [];
      Object.keys((props)).forEach((key) => {
        if (props[key].type == 'String') {
          attrs.push(this.camelToKebab(key) + '="' + props[key].value + '"');

        } else {
          attrs.push(':' + this.camelToKebab(key) + '="' + props[key].value + '"');
        }
      })
      return ['<' + componentName + ' ' + attrs.join(' ') + '>', '</' + componentName + '>']
    },
    getProps() {
      const props = {};
      Object.keys(this.componentDynamicProps).forEach((key) => {
        if (this.componentDynamicProps[key] != this.componentPropsSettings[key].default) {
          props[key] = {
            type: this.componentPropsSettings[key].type.name,
            value: this.componentDynamicProps[key]
          }
        }
      })
      return props
    },
    changeVal(key, value) {
      this.componentDynamicProps[key] = value;
    },
    updateCode(code) {
      this.localHtml = code;
      this.parseCode();
    },
    parseCode() {
      this.parsedHtml = parse(this.localHtml.replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, ' ').replace(/> </g, '><'))
    }
  },
  render: function (h) {
    const renderEl = () => {

      let slots = [];
      if (this.parsedHtml.length > 0) {
        this.parsedHtml.forEach((node) => {
          if (node.type == 'element') {
            if (node.tagName != 'template') {
              slots.push(
                  h({template: stringify([node])})
              )
            } else {
              const slotName = node.attributes.filter(i => i.key == 'slot')
              const slotOptions = {}
              if (slotName) {
                slotOptions.slot = slotName[0].value
              }
              node.children.forEach((childNode) => {
                const parseChildNode = parse(childNode.content)[0]
                if (parseChildNode.type == 'element') {
                  slots.push(h('template', slotOptions, [h({template: stringify([parseChildNode])})]))
                } else {
                  slots.push(h('template', slotOptions, stringify([parseChildNode])))
                }
              })
            }

          } else {
            slots.push(
                stringify([node])
            )
          }
        })
      }
      return h(this.component, {props: this.componentDynamicProps}, slots)
    }
    const renderItem = (type, key) => {

      const changeVal = (value) => {
        this.changeVal(key, value)
        this.$forceUpdate()
      }
      const variants = this.getDocsProps(key)
      return <settingsRenderItem onChange={changeVal} name={this.camelToKebab(key)}
                                 default={this.componentDynamicProps[key]}
                                 variants={variants}
                                 type={type}></settingsRenderItem>
    }

    const renderItemsRows = () => {
      return Object.keys(this.grouppedArrayProps).map((type) => {
        return <rt-row bottom={20}>
          <rt-col><p class="font-t-m color-main05 sp-b-0-2">type: {type}</p></rt-col>
          {this.grouppedArrayProps[type].map(i => renderItem(type, i.key))}
        </rt-row>
      })
    }

    const renderMenu = () => {
      return <div class="settings-render-menu">
        {renderItemsRows()}
      </div>
    }
    const renderMenuWrapper = () => {
      if (this.wrapMenu) {
        return <div class="rt-container sp-b-2">
          <rt-col>
            {renderMenu()}
          </rt-col>
        </div>
      } else {
        return <div class="sp-b-2">{renderMenu()}</div>
      }
    }
    const renderCode = () => {
      const codeEl = this.getCodeEl();
      if (this.wrapMenu) {

        return <div class="rt-container sp-b-2 settings-render-code sp-t-1">
          <rt-col>
            <settingsRenderCode onChange={this.updateCode} codeEl={codeEl} code={this.localHtml}></settingsRenderCode>
          </rt-col>
        </div>
      } else {
        return <div class="settings-render-code sp-t-1">
          <settingsRenderCode onChange={this.updateCode} codeEl={codeEl} code={this.localHtml}></settingsRenderCode>
        </div>
      }
    }


    return <div class="settings-render sp-b-2">
      {renderMenuWrapper()}
      {renderEl()}
      {renderCode()}

    </div>


  }

}

</script>

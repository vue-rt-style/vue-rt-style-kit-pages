<script type="text/jsx">

export default {
  name: 'settingRenderItem',
  props: {
    name: {
      type: String
    },
    type: {
      type: String
    },
    label: {
      type: String,
      default: ''
    },
    variants: {
      type: Array,
      default: () => []
    },
    default: {}
  },
  data: () => ({
    localValue: ''
  }),
  computed: {
    variantsArray() {
      const resArray = [];
      this.variants.forEach((i) => {
        resArray.push({'value': i, 'label': i})
      })
      return resArray.sort((a, b) => a.label > b.label ? 1 : -1)
    }
  },
  created() {
    this.localValue = this.default
  },
  methods: {
    setNewValue(e) {
      switch (true) {
        case this.variants.length > 0:
          if (e.value) {
            this.$emit('change', e.value);
            this.localValue = e.value
          }
          break;
        case this.type == 'Boolean':
          this.$emit('change', e.target.checked)
          this.localValue = e.target.checked
          break;
        default:
          this.$emit('change', e)
          this.localValue = e
      }
    },

  },

  render: function (h) {
    const renderInput = () => {
      switch (true) {
        case this.variants.length > 0:
          return <rt-select-v2 json={this.variantsArray} label={this.name} value={this.localValue}
                               onInput={this.setNewValue}/>
          break
        case this.type == 'String':
          return <rt-input version={2} placeholder={this.name} type="text" onInput={this.setNewValue}
                           value={this.localValue}/>
          break
        case this.type == 'Number':
          return <rt-input version={2} placeholder={this.name} type="number" onInput={this.setNewValue}
                           value={this.localValue}/>
          break
        case this.type == 'Boolean':
          return <div class="sp-t-1">
            <rt-checkbox type="checkbox" placeholder={this.name} onInput={this.setNewValue}
                         checked={this.localValue}><span class="color-main05">{this.name}</span></rt-checkbox>
          </div>
          break
        default:
          return <p>unknown type: {this.type}</p>
      }
    }
    return <rt-col size="2" bottom={20} class="settings-render-item">

      {renderInput()}
    </rt-col>


  }

};
</script>

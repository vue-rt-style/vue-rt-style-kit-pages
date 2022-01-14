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
    default: {}
  },
  data: () => ({
    localValue: ''
  }),
  computed: {},
  created() {
    this.localValue = this.default
  },
  methods: {
    setNewValue(e, a) {
      if (this.type == 'Boolean') {
        this.$emit('change', e.target.checked)
      } else {
        this.$emit('change', e)
      }
    }
  },

  render: function (h) {
    const renderInput = () => {
      switch (true) {
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

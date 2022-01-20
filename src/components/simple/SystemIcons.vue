<script type="text/jsx">
import names from "@vue-rt-style-kit-atoms-local/components/SystemIcons/docs/names.json";
import classnames from "@vue-rt-style-kit-atoms-local/components/SystemIcons/docs/classnames.json";
import documentation from "@vue-rt-style-kit-atoms-local/components/SystemIcons/docs/index.json";

const componentsList = {};

export default {
  name: "AppSystemIcons",
  components: componentsList,
  created() {
  },
  data: () => ({
    documentation: {},
    classnames: {},
    names: []
  }),
  mounted() {
    this.documentation = documentation;
    this.classnames = classnames;
    this.names = names

  },
  methods: {},
  computed: {
    renderTable() {

    },

  },
  render() {
    const renderList = ()=> {

      return this.names.map((i) => {
        const code = '<rt-system-icons name="' + i.name + '"></rt-system-icons>'
        return <rt-table-row>
          <rt-table-item>
            <pre-code text={code}></pre-code>
          </rt-table-item>
          <rt-table-item>
            {i.name}
          </rt-table-item>
          <rt-table-item>
            {i.label}
          </rt-table-item>
        </rt-table-row>
      }).filter(i => i.tag)
    }
    const renderListNode = renderList()
    const renderTable = ()=>{
      if(renderListNode.length > 0){
        return <rt-table class="rt-font-label">
          <template slot="header">
            <rt-table-head-item>icon</rt-table-head-item>
            <rt-table-head-item>name</rt-table-head-item>
            <rt-table-head-item>label</rt-table-head-item>
          </template>
          <template slot="body">{renderListNode}</template>
        </rt-table>
      }
      return null
    }
    return <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <h1 class="rt-font-hero">
            System Icons
          </h1>
        </div>
        <div class="app-body">
          <div class="app-row row">
            <rt-col size="12">
              {renderTable()}
            </rt-col>
          </div>
          <div class="app-row row">
            <rt-col size="12">
              <pre-code
                  text='<rt-button color="purple-border rt-sys-icon-hover--orange"><rt-system-icons color="purple" name="add large"></rt-system-icons> <span class="sp-l-1">свойство</span></rt-button>'></pre-code>
            </rt-col>
          </div>
          <documentation-builder json={this.documentation} type="props"/>
          <documentation-builder
              labels-json={[{label: 'class name', name: 'name'}, {label: 'description', name: 'description'}]}
              json={this.classnames} type="outher class affect"/>
        </div>
      </div>
    </div>
  }
};
</script>

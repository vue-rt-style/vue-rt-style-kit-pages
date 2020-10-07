

<script type="text/jsx">
import names from "@vue-rt-style-kit-atoms-local/components/SystemIcons/docs/names.json";
const componentsList = {};

export default {
  name: "AppSystemIcons",
  components: componentsList,
  mounted() {},
  created() {},

  methods: {},
  computed:{
    renderList(){
      return names.map((i)=>{
        return <rt-table-row>
          <rt-table-item>
            <rt-system-icons name={i.name}></rt-system-icons>
          </rt-table-item>
          <rt-table-item>
            {i.name}
          </rt-table-item>
          <rt-table-item>
            {i.label}
          </rt-table-item>
        </rt-table-row>
      })
    },
    renderTable(){

    },

  },
  render(){
    return <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
          <h1 class="rt-font-hero">
            System Icons
          </h1>
        </div>
        <div class="app-body">
          <div class="app-row row">

            <rt-table class="rt-font-label">
              <template slot="header">
                <rt-table-head-item>icon</rt-table-head-item>
                <rt-table-head-item>name</rt-table-head-item>
                <rt-table-head-item>label</rt-table-head-item>
              </template>
              <template slot="body">{this.renderList}</template>
            </rt-table>
          </div>
        </div>
      </div>
    </div>
  }
};
</script>

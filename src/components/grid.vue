<script type="text/jsx">
import componentsMenu from './componentsMenu.json';
import { pageSettingsGetters } from '@state/main.state.js'

export default {
  name: 'AppGrid',
  props: {},
  data: () => ({}),
  computed: {
    isShowGrid: pageSettingsGetters.isShowGrid,
    gridClasses() {
      const classes = ['grid', 'app-container', 'rt-container'];
      if (this.isShowGrid) {
        classes.push('grid--active');
      }
      return classes
    }
  },
  watch: {},
  mounted() {
  },
  methods: {},
  render(h) {

    return <div class={this.gridClasses}>
      <div class="rt-col-12">
        <div class="row">
          <div class="rt-col-1 rt-col-td-1 rt-col-md-1 demo-col test"/>
          <div class="rt-col-1 rt-col-td-1 rt-col-md-1 demo-col"/>
          <div class="rt-col-1 rt-col-td-1 rt-col-md-1 demo-col"/>
          <div class="rt-col-1 rt-col-td-1 demo-col md-d-none"/>
          <div class="rt-col-1 rt-col-td-1 demo-col md-d-none"/>
          <div class="rt-col-1 rt-col-td-1 demo-col md-d-none"/>
          <div class="rt-col-1 demo-col md-d-none td-d-none"/>
          <div class="rt-col-1 demo-col md-d-none td-d-none"/>
          <div class="rt-col-1 demo-col md-d-none td-d-none"/>
          <div class="rt-col-1 demo-col md-d-none td-d-none"/>
          <div class="rt-col-1 demo-col md-d-none td-d-none"/>
          <div class="rt-col-1 demo-col md-d-none td-d-none"/>
        </div>
      </div>
    </div>
  }
};
</script>

<script type="text/jsx">
import fixedGrids from '@components/grid.vue'
import { pageSettingsGetters } from '@state/main.state.js'
import topPart from './top.wrapper.vue'


export default {

  name: 'wrapper',
  computed: {
    isMenuOpen: pageSettingsGetters.isMenuOpen

  },
  appClasses() {

  },

  render(h) {
    return <div class="app__content">
      <topPart/>
      <fixedGrids/>
    </div>


  }
}

</script>

<script type="text/jsx">
import { pageSettingsGetters } from '@state/main.state.js';
import topPart from './parts/top.wrapper.vue'
import asidePart from './parts/aside.wrapper.vue'
import bodyPart from './parts/body.wrapper.vue'

export default {
  name: 'wrapper',
  computed: {
    isMenuOpen: pageSettingsGetters.isMenuOpen

  },
  appClasses() {
    const classes = ['app', 'rt-body'];
    if (this.isMenuOpen) {
      classes.push('app--hide-scroll');
      classes.push('app--has-open-menu');
    }
    return classes
  },

  render(h) {
    return <div class={this.appClasses}>
      <div class="app-wrapper" class={this.appWrapperClasses}>
        <asidePart/>
        <bodyPart/>
        <router-view name="body"/>
      </div>
    </div>


  }
}

</script>
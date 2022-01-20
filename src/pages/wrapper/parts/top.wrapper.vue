<script type="text/jsx">
import { pageSettingsMutations, pageSettingsGetters } from '@state/main.state.js'

export default {
  name: 'top.wrapper',
  computed: {
    isShowGrid: pageSettingsGetters.isShowGrid,
    isDarkModeOn: pageSettingsGetters.isDarkModeOn
  },
  methods: {
    toggleMenu() {
      pageSettingsMutations.toggleMenu()
    },
    gridToggle() {
      pageSettingsMutations.toggleGrid()
    },
    switchTheme() {
      pageSettingsMutations.toggleDarkMode()
    },
    codeViewerToggle() {

    }
  },
  render(h) {
    return <header class="app-header">
      <div class="app-header__left-panel">
        <div class="app-menu-trigger"
             onClick={this.toggleMenu}>
          <div class="app-menu-trigger__line"></div>
          <rt-system-icons class="app-menu-icon" name="arrow left"/>

        </div>
      </div>
      <div class="app-header__right-panel d-flex rt-dark-theme">
        <div class={'rt-tag' + (this.isShowGrid ? ' rt-tag--is-active' : '')}
             onClick={this.gridToggle}>Grid
        </div>
        <div class={'rt-tag' + (this.isDarkTheme ? ' rt-tag--is-active' : '')}
             onClick={this.switchTheme}>Dark mode
        </div>
        <div class={'rt-tag' + (this.codeViewer ? ' rt-tag--is-active' : '')}
             onClick={this.codeViewerToggle}>Edit on
        </div>
      </div>
    </header>

  }
}

</script>

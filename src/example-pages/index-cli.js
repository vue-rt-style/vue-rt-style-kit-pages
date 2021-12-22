import Vue from 'vue'
import StyleKit from './StyleKit.vue'
import RootPage from './RootPage.vue'

const baseDir = process.env.NODE_ENV_PATH || 'vue-rt-style-kit-pages'
const Scope = Vue

Scope.prototype.globalVars = JSON.stringify({
  PAGES_BASE_DIR: baseDir
})

const initApp = () => {
  const App = new Scope({
    // router,
    name: 'App',
    render: h => h(RootPage)
  })
  App.$mount('#app')
}

StyleKit.init(Scope)
  .then(() => initApp())

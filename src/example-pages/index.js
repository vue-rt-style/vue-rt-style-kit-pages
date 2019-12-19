import Vue from "vue";
import VueRouter from "vue-router";
// import VueRtStyleAtoms from "vue-rt-style-kit-atoms";
// console.info(VueRtStyleAtoms)
// import VueRtStyleMolecules from "vue-rt-style-kit-molecules";
import VueRtDevStyle from "../develover-lib/index";
import routes from "./router";
import RootPage from "./components/App.vue";
import stylesAtoms from "../../../vue-rt-style-kit-atoms/src/css/vue-rt-style-atoms.styl";
import stylesMolecules from "../../..//vue-rt-style-kit-molecules/src/css/vue-rt-style-kit-molecules.styl";
import appStyles from './css/index.styl'
import Global from "vue-rt-style-kit-atoms/src/variables.json";
// import Rx from 'rxjs';
// import VueRx from 'vue-rx';

// Vue.use(VueRx, Rx);
Vue.use(VueRouter);

if (!window[Global.globalSettingsKey]) window[Global.globalSettingsKey] = {}
// Use validator only demo-stand for provide validation
window[Global.globalSettingsKey].useValidator = true
Vue.use(VueRtDevStyle);
// Vue.use(VueRtStyleAtoms);
// Vue.use(VueRtStyleMolecules);
const router = new VueRouter({
  mode: "history",
  routes: routes.routes
});



const App = new Vue({
  el: "#app",
  router,
  name: "App",
  render: h => h(RootPage)
});

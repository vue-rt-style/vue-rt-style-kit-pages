import Vue from "vue";
import VueRouter from "vue-router";
import VueRtStyleAtoms from "@vue-rt-style-kit-atoms-local";
import VueRtStyleIcons from "@vue-rt-style-kit-icons-local";
import VueRtStyleMolecules from "@vue-rt-style-kit-molecules-local";
import VueRtDevStyle from "../develover-lib/index";
import routes from "./router";
import RootPage from "./components/App.vue";
import appStyles from './css/index.styl'
import Global from "@vue-rt-style-kit-atoms-local/variables.json";

// import Rx from 'rxjs';
// import VueRx from 'vue-rx';

// Vue.use(VueRx, Rx);
Vue.use(VueRouter);

if (!window[Global.globalSettingsKey]) window[Global.globalSettingsKey] = {}
// Use validator only demo-stand for provide validation
window[Global.globalSettingsKey].useValidator = true
Vue.use(VueRtDevStyle);
Vue.use(VueRtStyleAtoms);
Vue.use(VueRtStyleIcons);
Vue.use(VueRtStyleMolecules);
// Vue.use(VueRtDevStyle);
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

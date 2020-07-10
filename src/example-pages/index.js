import Vue from "vue";
import VueRouter from "vue-router";
import VueRtStyleAtoms from "@vue-rt-style-kit-atoms-local";
import {Price} from "@vue-rt-style-kit-atoms-local";
import VueRtStyleIcons from "@vue-rt-style-kit-icons-local";
import VueRtStyleMolecules from "@vue-rt-style-kit-molecules-local";
import VueRtDevStyle from "../develover-lib/index";
import routes from "./router";
import RootPage from "./components/App.vue";
// import nib from 'nib/lib/nib/index.styl'
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
let href = location.href
if(href.search('vue-rt-style-kit-pages')>0) {
  routes.routes.forEach((r) => {
    r.path = '/vue-rt-style-kit-pages' + r.path;
  })
}
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

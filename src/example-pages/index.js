import Vue from "vue";
import VueRouter from "vue-router";
// import VueRtStyleAtoms from "@vue-rt-style-kit-atoms-local";
import {Price} from "@vue-rt-style-kit-atoms-local";
import VueRtStyleIcons from "@vue-rt-style-kit-icons-local";
// import VueRtStyleMolecules from "@vue-rt-style-kit-molecules-local";
import VueRtDevStyle from "../develover-lib/index";
import routes from "./router";
import RootPage from "./components/App.vue";
import appStyles from './css/index.styl'
// import stylesAtoms from "../atoms/css/vue-rt-style-atoms.styl";
import stylesIcons from "../icons/css/vue-rt-style-kit-icons.styl";
// import stylesMolecules from "../molecules/css/vue-rt-style-kit-molecules.styl";
import Global from "@vue-rt-style-kit-atoms-local/variables.json";
import {getAllDirectivesDynamic, getAllDynamic} from "./componentsList";

const AppVue = Vue;
AppVue.use(VueRouter);


if (!window[Global.globalSettingsKey]) window[Global.globalSettingsKey] = {}

AppVue.use(VueRtDevStyle);
// AppVue.use(VueRtStyleAtoms);
AppVue.use(VueRtStyleIcons);
// AppVue.use(VueRtStyleMolecules);
getAllDynamic((await import('@vue-rt-style-kit-atoms-local/index-for-dynamic')).default,AppVue)
getAllDynamic((await import('@vue-rt-style-kit-molecules-local/index-for-dynamic')).default,AppVue)
getAllDirectivesDynamic((await import('@vue-rt-style-kit-molecules-local/index-for-dynamic')).directives,AppVue)

if(globalVars?.PAGES_BASE_DIR)
  routes.routes.forEach((r) => r.path = `/${globalVars.PAGES_BASE_DIR}${r.path}`)

const router = new VueRouter({
  mode: "history",
  routes: routes.routes

});

const App = new AppVue({
  el: "#app",
  router,
  name: "App",
  render: h => h(RootPage)
});

export {AppVue};

// import stylesAtoms from "../atoms/css/vue-rt-style-atoms.styl";


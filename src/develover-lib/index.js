// import styles from './css/vue-rt-style-develop.less';
// import mainStyles from './css/vue-rt-style-develop.less';
import { DocumentationBuilder, PreComponent, PreComponentEditor, PreTimeout, settingsRender, } from './components';

// import VueRtStyle from '../lib'

const VueRtDevStyle = {
  install(Vue, config) {
    Vue.component(PreComponent.name, PreComponent);
    Vue.component(PreComponentEditor.name, PreComponentEditor);
    Vue.component(DocumentationBuilder.name, DocumentationBuilder);
    Vue.component(PreTimeout.name, PreTimeout);
    Vue.component(settingsRender.name, settingsRender);
    Vue.directive("validate", DocumentationBuilder);
  }
};


export default VueRtDevStyle;
export {PreComponent, PreComponentEditor, DocumentationBuilder, PreTimeout};
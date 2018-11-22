import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueHighlightJS from 'vue-highlightjs'
import Icons from '@/assets/icons'
import ComponentExamples from './components/component-examples'
import ComponentDebug from './components/component-debug'
import ComponentDemo from './components/component-demo'
import ComponentApi from './components/component-api'
import Title1 from './components/title-1'
import Title2 from './components/title-2'
import Title3 from './components/title-3'
import CodePreview from './components/code-preview'
import { splitComponent } from './utils/helpers'

import VueUiToolkit from '@/'
import './styles/index.css'

Vue.use(VueUiToolkit, { disablePrefix: true })
Vue.use(VueHighlightJS)
Vue.use(Icons)

Vue.component('ComponentExamples', ComponentExamples)
Vue.component('ComponentDebug', ComponentDebug)
Vue.component('ComponentDemo', ComponentDemo)
Vue.component('ComponentApi', ComponentApi)
Vue.component('Title1', Title1)
Vue.component('Title2', Title2)
Vue.component('Title3', Title3)
Vue.component('CodePreview', CodePreview)

Vue.prototype.$splitComponent = splitComponent

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

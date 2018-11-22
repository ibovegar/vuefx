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

// import VueUiToolkit from '@/'
import { Select, Dropdown, Badge, Popover, Chips, Tabs, Vmenu } from '@/index.js'
import './styles/index.css'

// Vue.use(VueUiToolkit, { disablePrefix: true })

Vue.use(Select, { disablePrefix: true })
Vue.use(Dropdown, { disablePrefix: true })
Vue.use(Badge, { disablePrefix: true })
Vue.use(Popover, { disablePrefix: true })
Vue.use(Chips, { disablePrefix: true })
Vue.use(Tabs, { disablePrefix: true })
Vue.use(Vmenu, { disablePrefix: true })

/*Vue.use(Select)
Vue.use(Dropdown)
Vue.use(Badge)
Vue.use(Popover)
Vue.use(Chips)
Vue.use(Tabs)
Vue.use(Vmenu)*/

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

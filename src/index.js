/* eslint object-property-newline: 0 */
import '@/styles/index.css'
import AnimateHeight from './components/AnimateHeight'
import Badge from './components/Badge'
import Popover from './components/Popover'
import Tabs from './components/Tabs'
import Select from './components/Select'
import Chips from './components/Chips'
import Dropdown from './components/Dropdown'
import Vmenu from './components/Vmenu'
import Layout from './components/Layout'
import Paper from './components/Paper'
import Icons from './components/Icon'
import Transitions from './components/Transitions'

const components = {
  AnimateHeight, Badge, Chips, Dropdown, Popover, Select, Tabs, Vmenu,
  Layout, Paper, Icons, Transitions
}

/* Declare install function executed by Vue.use() */
function install (Vue, options) {
  if (components.isInstalled) return

  Object.keys(components).forEach((key) => {
    Vue.use(components[key], { ...options })
  })

  components.isInstalled = true
}

/* Auto-install when vue is found (eg. in browser via <script> tag) */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(components.install)
}

export {
  AnimateHeight, Badge, Chips, Dropdown, Popover, Select, Tabs, Vmenu,
  Layout, Paper, Icons, Transitions
}

/* To allow use as module (npm/webpack/etc.) export component */
export default {
  install,
  ...components
}

/* eslint object-property-newline: 0 */

import '@/styles/index.css'

import Colors from './mixins/colors.js'
import AnimateHeight from './components/AnimateHeight'
import Badge from './components/Badge'
import Icon from './components/Icon'
import Popover from './components/Popover'
import Tabs from './components/Tabs'
import Select from './components/Select'
import { Chip, ChipGroup } from './components/Chip'
import { Dropdown, DropdownItem } from './components/Dropdown'
import { Vmenu, VmenuCategory, VmenuTopic } from './components/Vmenu'

const components = {
  AnimateHeight, Badge, Chip, ChipGroup, Dropdown, DropdownItem,
  Icon, Popover, Select, Tabs, Vmenu, VmenuCategory,
  VmenuTopic
}

/* Declare install function executed by Vue.use() */
components.install = (Vue) => {
  if (components.isInstalled) return

  Object.keys(components).forEach((key) => {
    if (key && key !== 'install') {
      Vue.component(components[key].name, components[key])
    }
  })

  components.isInstalled = true
}

/* Auto-install when vue is found (eg. in browser via <script> tag) */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(components.install)
}

/* To allow use as module (npm/webpack/etc.) export component */
export default components

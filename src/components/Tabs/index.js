import Tabs from './Tabs'
import { registerComponent } from '@/utils/plugins'

Tabs.install = function (Vue, options) {
  registerComponent(Vue, options, Tabs)
}

export default Tabs

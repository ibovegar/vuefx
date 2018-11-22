import Vmenu from './Vmenu'
import VmenuCategory from './VmenuCategory'
import VmenuTopic from './VmenuTopic'
import { registerComponent } from '@/utils/plugins'

export default {
  install (Vue, options) {
    registerComponent(Vue, options, Vmenu)
    registerComponent(Vue, options, VmenuCategory)
    registerComponent(Vue, options, VmenuTopic)
  }
}

export { Vmenu, VmenuCategory, VmenuTopic }

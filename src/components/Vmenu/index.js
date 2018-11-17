import Vmenu from './Vmenu'
import VmenuCategory from './VmenuCategory'
import VmenuTopic from './VmenuTopic'

Vmenu.install = function (Vue) {
  Vue.component(Vmenu.name, Vmenu)
  Vue.component(VmenuCategory.name, VmenuCategory)
  Vue.component(VmenuTopic.name, VmenuTopic)
}

export { Vmenu, VmenuCategory, VmenuTopic }
export default Vmenu

import Vmenu from './Vmenu'
import VmenuCategory from './VmenuCategory'
import VmenuTopic from './VmenuTopic'

Vmenu.install = function (Vue) {
  Vue.component(Vmenu.name, Vmenu)
}

VmenuCategory.install = function (Vue) {
  Vue.component(VmenuCategory.name, VmenuCategory)
}

VmenuTopic.install = function (Vue) {
  Vue.component(VmenuTopic.name, VmenuTopic)
}

export {
  Vmenu,
  VmenuCategory,
  VmenuTopic
}

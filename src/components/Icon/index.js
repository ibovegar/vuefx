import Icons from './Icon'
import IconSet from '@/assets/icons'
import { registerComponent } from '@/utils/plugins'

Icons.install = function (Vue, options) {
  registerComponent(Vue, options, Icons)
  Vue.use(IconSet)
}

export default Icons

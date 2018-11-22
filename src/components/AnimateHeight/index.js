import AnimateHeight from './AnimateHeight'
import { registerComponent } from '@/utils/plugins'

AnimateHeight.install = function (Vue, options) {
  registerComponent(Vue, options, AnimateHeight)
}

export default AnimateHeight

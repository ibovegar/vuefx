import Badge from './Badge'
import { registerComponent } from '@/utils/plugins'

Badge.install = function (Vue, options) {
  registerComponent(Vue, options, Badge)
}

export default Badge

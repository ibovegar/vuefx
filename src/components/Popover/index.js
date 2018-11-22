import Popover from './Popover'
import { registerComponent } from '@/utils/plugins'

Popover.install = function (Vue, options) {
  registerComponent(Vue, options, Popover)
}

export default Popover

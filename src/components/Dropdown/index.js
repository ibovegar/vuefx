import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import { registerComponent } from '@/utils/plugins'

export default {
  install (Vue, options) {
    registerComponent(Vue, options, Dropdown)
    registerComponent(Vue, options, DropdownItem)
  }
}

export { Dropdown, DropdownItem }

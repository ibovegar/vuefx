import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'

Dropdown.install = function (Vue) {
  Vue.component(Dropdown.name, Dropdown)
}

DropdownItem.install = function (Vue) {
  Vue.component(DropdownItem.name, DropdownItem)
}

export {
  Dropdown,
  DropdownItem
}

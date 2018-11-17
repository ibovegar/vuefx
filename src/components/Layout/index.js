import Chip from './Chip'
import ChipGroup from './ChipGroup'

Chip.install = function (Vue) {
  Vue.component(Chip.name, Chip)
}

ChipGroup.install = function (Vue) {
  Vue.component(ChipGroup.name, ChipGroup)
}

export {
  Chip,
  ChipGroup
}

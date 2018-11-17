import Chips from './Chip'
import ChipGroup from './ChipGroup'

Chips.install = function (Vue) {
  Vue.component(Chips.name, Chips)
  Vue.component(ChipGroup.name, ChipGroup)
}

export { Chips, ChipGroup }
export default Chips

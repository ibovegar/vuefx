import Chip from './Chip'
import ChipGroup from './ChipGroup'
import { registerComponent } from '@/utils/plugins'

export default {
  install (Vue, options) {
    registerComponent(Vue, options, Chip)
    registerComponent(Vue, options, ChipGroup)
  }
}

export { Chip, ChipGroup }

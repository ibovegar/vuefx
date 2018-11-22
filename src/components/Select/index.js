import Select from './Select'
import { registerComponent } from '@/utils/plugins'

Select.install = function (Vue, options) {
  registerComponent(Vue, options, Select)
}

export default Select

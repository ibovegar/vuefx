import Paper from './Paper'
import { registerComponent } from '@/utils/plugins'

Paper.install = function (Vue, options) {
  registerComponent(Vue, options, Paper)
}

export default Paper

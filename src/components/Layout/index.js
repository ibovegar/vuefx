import Flex from './Flex'
import { registerComponent } from '@/utils/plugins'

Flex.install = function (Vue, options) {
  registerComponent(Vue, options, Flex)
}

export default Flex

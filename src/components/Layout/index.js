import Flex from './Flex'
import FlexItem from './FlexItem'
import { registerComponent } from '@/utils/plugins'

export default {
  install (Vue, options) {
    registerComponent(Vue, options, Flex)
    registerComponent(Vue, options, FlexItem)
  }
}

export { Flex, FlexItem }

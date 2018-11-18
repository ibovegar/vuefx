import Flex from './Flex'
import FlexItem from './FlexItem'

export { Flex, FlexItem }
export default {
  install (Vue) {
    Vue.component(Flex.name, Flex)
    Vue.component(FlexItem.name, FlexItem)
  }
}

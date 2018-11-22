import Flex from './Flex'
// import Grid from './Grid'
import { registerComponent } from '@/utils/plugins'

export { Flex } // Grid
export default {
  install (Vue, options) {
    registerComponent(Vue, options, Flex)
    // registerComponent(Vue, options, Grid)
  }
}

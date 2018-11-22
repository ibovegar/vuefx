import Flex from './Flex'
// import Grid from './Grid'

export { Flex } // Grid
export default {
  install (Vue) {
    Vue.component(Flex.name, Flex)
    // Vue.component(Grid.name, Grid)
  }
}

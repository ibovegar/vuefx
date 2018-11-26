import Fade from './Fade'
import Slide from './Slide'
import Grow from './Grow'
import { registerComponent } from '@/utils/plugins'

export default {
  install (Vue, options) {
    registerComponent(Vue, options, Fade)
    registerComponent(Vue, options, Slide)
    registerComponent(Vue, options, Grow)
  }
}

export { Fade, Slide, Grow }

<template>
  <div>
    <title-1 title="Transitions">
      Customization is an important part of any ui-toolkits, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </title-1>
    <component-demo title="Grow" :component="Grow" :code="GrowCode">
      The example below show how to customize a sidebar to stay dark even when the app is switched to  mode.
    </component-demo>
    <component-demo title="Slide" :component="Slide" :code="SlideCode">
      The example below show how to customize a sidebar to stay dark even when the app is switched to  mode.
    </component-demo>
    <component-demo title="Fade" :component="Fade" :code="FadeCode">
      The example below show how to customize a sidebar to stay dark even when the app is switched to  mode.
    </component-demo>
  </div>
</template>

<script>
import api from './api'
import Grow from './x-grow'
import GrowRaw from '!raw-loader!./x-grow'
import Slide from './x-slide'
import SlideRaw from '!raw-loader!./x-slide'
import Fade from './x-fade'
import FadeRaw from '!raw-loader!./x-fade'

export default {
  data () {
    return {
      api,
      Grow,
      GrowCode: this.$splitComponent(GrowRaw),
      Slide,
      SlideCode: this.$splitComponent(SlideRaw),
      Fade,
      FadeCode: this.$splitComponent(FadeRaw)
    }
  }
}
</script>

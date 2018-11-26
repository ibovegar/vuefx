<template>
  <div>
    <title-1 title="Icons">
      Customization is an important part of any ui-toolkits, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </title-1>
    <component-demo title="Usage" :component="Usage" :code="UsageCode">
      The example below show how to customize a sidebar to stay dark even when the app is switched to  mode.
    </component-demo>
    <component-api :api="api"/>
    <component-examples>
      <component-demo title="Modifiers" :component="Modifiers" :code="ModifiersCode">
        Lorem ipsum dolor sit amet
      </component-demo>
      <component-demo title="Styling" :component="Styling" :code="StylingCode">
        Lorem ipsum dolor sit amet
      </component-demo>
    </component-examples>
  </div>
</template>

<script>
import api from './api'
import Usage from './x-usage'
import UsageRaw from '!raw-loader!./x-usage'
import Modifiers from './x-modifiers'
import ModifiersRaw from '!raw-loader!./x-modifiers'
import Styling from './x-styling'
import StylingRaw from '!raw-loader!./x-styling'

export default {
  data () {
    return {
      api,
      Usage,
      UsageCode: this.$splitComponent(UsageRaw),
      Modifiers,
      ModifiersCode: this.$splitComponent(ModifiersRaw),
      Styling,
      StylingCode: this.$splitComponent(StylingRaw)
    }
  }
}
</script>

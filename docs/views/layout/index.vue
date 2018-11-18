<template>
  <div>
    <title-1 title="Layout">
      Customization is an important part of any ui-toolkits, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </title-1>
    <component-demo title="Usage" :component="Usage" :code="UsageCode">
      The example below show how to customize a sidebar to stay dark even when the app is switched to  mode.
    </component-demo>
  </div>
</template>

<script>
import Usage from './x-usage'
import UsageRaw from '!raw-loader!./x-usage'

export default {
  data () {
    return {
      Usage,
      UsageCode: this.$splitComponent(UsageRaw)
    }
  }
}
</script>

<template>
  <div>
    <title-1 title="Vertical menu">
      Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.
    </title-1>
    <component-demo title="Usage" :component="Usage" :code="UsageCode"/>
    <component-api :api="api"/>
    <component-examples>
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
import Styling from './x-styling'
import StylingRaw from '!raw-loader!./x-styling'

export default {
  data () {
    return {
      api,
      Usage,
      UsageCode: this.$splitComponent(UsageRaw),
      Styling,
      StylingCode: this.$splitComponent(StylingRaw)
    }
  }
}
</script>

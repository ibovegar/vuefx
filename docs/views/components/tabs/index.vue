<template>
  <div>
    <title-1 title="Tabs">
      Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.
    </title-1>
    <component-demo title="Usage" :component="Usage" :code="UsageCode"/>
    <component-api :api="api"/>
    <component-examples>
      <component-demo title="Responsive" :component="Responsive" :code="ResponsiveCode">
        Lorem ipsum dolor sit amet
      </component-demo>
    </component-examples>
  </div>
</template>

<script>
import api from './api'
import Usage from './x-usage'
import UsageRaw from '!raw-loader!./x-usage'
import Responsive from './x-responsive'
import ResponsiveRaw from '!raw-loader!./x-responsive'

export default {
  data () {
    return {
      api,
      Usage,
      UsageCode: this.$splitComponent(UsageRaw),
      Responsive,
      ResponsiveCode: this.$splitComponent(ResponsiveRaw)
    }
  }
}
</script>

<template>
  <div>
    <title-1 title="Select">
      Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.
    </title-1>
    <component-demo title="Usage" :component="Usage" :code="UsageCode"/>
    <component-api :api="api"/>
    <component-examples>
      <component-demo title="Single select" :component="Multiple" :code="MultipleCode">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam.
      </component-demo>
      <component-demo title="Multiple select" :component="Multiple" :code="MultipleCode">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
      </component-demo>
    </component-examples>
  </div>
</template>

<script>
import api from './api'
import Usage from './x-usage'
import UsageRaw from '!raw-loader!./x-usage'
import Multiple from './x-multiple'
import MultipleRaw from '!raw-loader!./x-multiple'

export default {
  data () {
    return {
      api,
      Usage,
      UsageCode: this.$splitComponent(UsageRaw),
      Multiple,
      MultipleCode: this.$splitComponent(MultipleRaw)
    }
  }
}
</script>

<template>
  <div>
    <title-1 title="Badge">
      <code class="tag">Lorem ipsum</code> dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </title-1>
    <component-demo title="Badge" :component="Usage" :code="UsageCode">
      Lorem ipsum dolor sit amet
    </component-demo>
    <component-api :api="api"/>
  </div>
</template>

<script>
import api from './api'
import Usage from './x-usage'
import UsageRaw from '!raw-loader!./x-usage'

export default {
  data () {
    return {
      api,
      Usage,
      UsageCode: this.$splitComponent(UsageRaw)
    }
  }
}
</script>

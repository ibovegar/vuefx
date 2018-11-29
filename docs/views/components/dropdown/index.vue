<template>
  <div>
    <title-1 title="Dropdown">
      Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.
    </title-1>
    <component-demo title="Usage" :component="Usage" :code="UsageCode"/>
    <component-api :api="api"/>
    <component-examples>
     <component-demo title="Single select" :component="Single" :code="SingleCode">
       Lorem ipsum dolor sit amet
     </component-demo>
     <component-demo title="Multiple select" :component="Multiple" :code="MultipleCode">
       Lorem ipsum dolor sit amet
     </component-demo>
    </component-examples>
  </div>
</template>

<script>
import api from './api'
import Usage from './x-usage'
import UsageRaw from '!raw-loader!./x-usage'
import Single from './x-single'
import SingleRaw from '!raw-loader!./x-single'
import Multiple from './x-multiple'
import MultipleRaw from '!raw-loader!./x-multiple'

export default {
  data () {
    return {
      api,
      Usage,
      UsageCode: this.$splitComponent(UsageRaw),
      Single,
      SingleCode: this.$splitComponent(SingleRaw),
      Multiple,
      MultipleCode: this.$splitComponent(MultipleRaw)
    }
  }
}
</script>

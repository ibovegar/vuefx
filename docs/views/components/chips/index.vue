<template>
  <div>
    <title-1 title="Chips">
      Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.
    </title-1>
    <component-demo title="Usage" :component="Usage" :code="UsageCode"/>

    <component-examples>
      <component-demo title="Customization" :component="Styling" :code="StylingCode">
        Lorem ipsum dolor sit amet
      </component-demo>
      <component-demo title="Chip group" :component="Group" :code="GroupCode">
        Lorem ipsum dolor sit amet
      </component-demo>
    </component-examples>
  </div>
</template>

<script>
import Usage from './x-usage'
import UsageRaw from '!raw-loader!./x-usage'
import Styling from './x-styling'
import StylingRaw from '!raw-loader!./x-styling'
import Group from './x-group'
import GroupRaw from '!raw-loader!./x-group'

export default {
  data () {
    return {
      Usage,
      UsageCode: this.$splitComponent(UsageRaw),
      Styling,
      StylingCode: this.$splitComponent(StylingRaw),
      Group,
      GroupCode: this.$splitComponent(GroupRaw)
    }
  }
}
</script>

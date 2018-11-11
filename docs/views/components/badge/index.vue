<template>
  <div>
    <title-1 title="Badge">
      <code class="tag">Lorem ipsum</code> dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </title-1>
    <component-demo title="Usage" :component="Usage" :code="UsageCode">
      Lorem ipsum dolor sit amet
    </component-demo>
    <component-api :api="api"/>
    <component-examples>
      <component-demo title="Customization" :component="Styling" :code="StylingCode">
        Lorem ipsum dolor sit amet
      </component-demo>
      <component-demo title="Position & offset" :component="Position" :code="PositionCode" no-padding>
        Lorem ipsum dolor sit amet
      </component-demo>
      <component-demo title="Value" :component="Value" :code="ValueCode">
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
import Position from './x-position'
import PositionRaw from '!raw-loader!./x-position'
import Value from './x-value'
import ValueRaw from '!raw-loader!./x-value'

export default {
  data () {
    return {
      api,
      Usage,
      UsageCode: this.$splitComponent(UsageRaw),
      Styling,
      StylingCode: this.$splitComponent(StylingRaw),
      Position,
      PositionCode: this.$splitComponent(PositionRaw),
      Value,
      ValueCode: this.$splitComponent(ValueRaw)
    }
  }
}
</script>

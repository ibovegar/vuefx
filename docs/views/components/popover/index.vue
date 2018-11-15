<template>
  <div>
    <title-1 title="Popover">
      Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut.
    </title-1>
    <component-demo title="Usage" :component="Usage" :code="UsageCode"/>
    <component-api :api="api"/>
    <component-examples>
      <component-demo title="Position and offset" :component="Position" :code="PositionCode">
        Lorem ipsum dolor sit amet
      </component-demo>
      <component-demo title="Trigger element" :component="Trigger" :code="TriggerCode">
        Lorem ipsum dolor sit amet
      </component-demo>
      <component-demo title="Width modifiers" :component="Width" :code="WidthCode">
        Lorem ipsum dolor sit amet
      </component-demo>
      <component-demo title="Custom content" :component="Content" :code="ContentCode">
        Lorem ipsum dolor sit amet
      </component-demo>
    </component-examples>
  </div>
</template>

<script>
import api from './api'
import Usage from './x-usage'
import UsageRaw from '!raw-loader!./x-usage'
import Position from './x-position'
import PositionRaw from '!raw-loader!./x-position'
import Trigger from './x-trigger'
import TriggerRaw from '!raw-loader!./x-trigger'
import Width from './x-width'
import WidthRaw from '!raw-loader!./x-width'
import Content from './x-content'
import ContentRaw from '!raw-loader!./x-content'

export default {
  data () {
    return {
      api,
      Usage,
      UsageCode: this.$splitComponent(UsageRaw),
      Position,
      PositionCode: this.$splitComponent(PositionRaw),
      Trigger,
      TriggerCode: this.$splitComponent(TriggerRaw),
      Width,
      WidthCode: this.$splitComponent(WidthRaw),
      Content,
      ContentCode: this.$splitComponent(ContentRaw),
    }
  }
}
</script>

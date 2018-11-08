<template>
  <div>
    <component-demo title="Trigger" :component="ExTrigger" :code="ExTriggerCode"/>

    <component-demo title="Position" :component="ExPosition" :code="ExPositionCode"/>

    <component-demo title="Content" :component="ExContent" :code="ExContentCode"/>
  </div>
</template>

<script>
import ExTrigger from './examples/ExTrigger'
import ExTriggerCode from '!raw-loader!./examples/ExTrigger'

import ExPosition from './examples/ExPosition'
import ExPositionCode from '!raw-loader!./examples/ExPosition'

import ExContent from './examples/ExContent'
import ExContentCode from '!raw-loader!./examples/ExContent'

export default {
  data () {
    return {
      ExTrigger,
      ExTriggerCode,
      ExPosition,
      ExPositionCode,
      ExContent,
      ExContentCode
    }
  }
}
</script>

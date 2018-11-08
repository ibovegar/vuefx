<template>
  <div>
    <component-demo title="Single select" :component="ExSingle" :code="ExSingleCode">
      Lorem ipsum dolor sit amet
    </component-demo>
    <component-demo title="Multiple select" :component="ExMultiple" :code="ExMultipleCode">
      Lorem ipsum dolor sit amet
    </component-demo>
  </div>
</template>

<script>
import ExSingle from './examples/ExSingle'
import ExSingleCode from '!raw-loader!./examples/ExSingle'

import ExMultiple from './examples/ExMultiple'
import ExMultipleCode from '!raw-loader!./examples/ExMultiple'

export default {
  data () {
    return {
      ExSingle,
      ExSingleCode,
      ExMultiple,
      ExMultipleCode
    }
  }
}
</script>

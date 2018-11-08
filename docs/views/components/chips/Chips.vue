<template>
  <div>
    <component-demo title="Chip styles" :component="ExChipStyles" :code="ExChipStylesCode">
      Lorem ipsum dolor sit amet
    </component-demo>
    <component-demo title="Chip group" :component="ExChipGroup" :code="ExChipGroupCode">
      Lorem ipsum dolor sit amet
    </component-demo>
  </div>
</template>

<script>
import ExChipStyles from './examples/ExChipStyles'
import ExChipStylesCode from '!raw-loader!./examples/ExChipStyles'

import ExChipGroup from './examples/ExChipGroup'
import ExChipGroupCode from '!raw-loader!./examples/ExChipGroup'

export default {
  data () {
    return {
      ExChipStyles,
      ExChipStylesCode,
      ExChipGroup,
      ExChipGroupCode
    }
  }
}
</script>

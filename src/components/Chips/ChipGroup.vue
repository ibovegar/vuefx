<template>
  <div
    class="fx-chip-group"
    :style="[colorStyles]"
    v-drag-scroll.x="draggable"
    >
    <fx-flex
      :justify-content="align"
      :wrap="draggable ? 'nowrap' : 'wrap'"
      :gutter="gutter"
      >
      <slot/>
    </fx-flex>
  </div>
</template>

<script>
import DragScroll from '@/directives/drag-scroll'
import ColorMixin from '@/mixins/colors.js'

export default {
  name: 'fx-chip-group',

  mixins: [ ColorMixin ],

  directives: { DragScroll },

  props: {
    gutter: Number,
    draggable: Boolean,
    align: String
  }
}
</script>

<style>
.fx-chip-group {
  --style--font: var(--color--font-1);
  --style--background: transparent;
  --style--border: transparent;
  --style--color: var(--color--primary);
  --gutter: 5px;

  border: 1px solid var(--style--border);
  background-color: var(--style--background);
  overflow: hidden;
}
</style>

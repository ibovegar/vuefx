<template>
  <div
    class="fx-chip-group"
    :class="rootClasses"
    :style="[colorStyles, rootStyles]"
    v-drag-scroll.x="draggable"
    >
    <slot/>
  </div>
</template>

<script>
import DragScroll from '@/directives/drag-scroll'
import ColorMixin from '@/mixins/colors.js'

export default {
  name: 'FxChipGroup',

  mixins: [ ColorMixin ],

  directives: { DragScroll },

  props: {
    gutter: { type: Number, default: 5 },
    draggable: Boolean,
    align: {
      type: String,
      default: 'left',
      validator: value => { return ['left', 'right', 'center'].includes(value) }
    }
  },

  data () {
    return {
      $_chipGroupGutter: this.gutter
    }
  },

  computed: {
    rootClasses: function () {
      return {
        'is-left': this.align === 'left',
        'is-right': this.align === 'right',
        'is-center': this.align === 'center',
        'is-draggable': this.draggable
      }
    },
    rootStyles: function () {
      return {
        margin: (this.gutter * -1) / 2 + 'px'
      }
    }
  }
}
</script>

<style>
.fx-chip-group {
  --style--font: var(--color--font-1);
  --style--background: transparent;
  --style--border: transparent;
  --style--color: var(--color--primary);

  border: 1px solid var(--style--border);
  background-color: var(--style--background);
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  &.is-draggable {
    flex-wrap: nowrap;
    cursor: grab;
  }

  &.is-left { justify-content: left }
  &.is-center { justify-content: center }
  &.is-right { justify-content: right }
}
</style>

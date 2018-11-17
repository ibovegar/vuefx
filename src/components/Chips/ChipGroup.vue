<template>
  <div
    class="fx-chip-group"
    :style="[colorStyles, rootStyles]"
    v-drag-scroll.x="draggable"
    >
    <div
      class="fx-chip-group__wrapper"
      :class="rootClasses"
      >
      <slot/>
    </div>
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
    align: {
      type: String,
      default: 'left',
      validator: value => { return ['left', 'right', 'center'].includes(value) }
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
        '--gutter': this.gutter + 'px'
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
  --gutter: 5px;

  border: 1px solid var(--style--border);
  background-color: var(--style--background);
  overflow: hidden;

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    margin: calc(0px - var(--gutter));

    &.is-draggable {
      flex-wrap: initial;
      cursor: grab;
    }

    &.is-left { justify-content: left }
    &.is-center { justify-content: center }
    &.is-right { justify-content: right }

    .fx-chip {
      margin: var(--gutter);
      flex-shrink: 0;
    }
  }
}
</style>

<template>
  <div
    class="flex-container"
    :style="[rootStyles, colorStyles, gutterStyles]"
    >
    <slot></slot>
  </div>
</template>

<script>
import ColorMixin from '@/mixins/colors.js'

export default {
  name: 'fx-flex-item',

  mixins: [ ColorMixin ],

  props: {
    self: {
      default: 'auto',
      validator: function (value) {
        return [
          'flex-end',
          'flex-start',
          'center',
          'auto',
          'baseline',
          'stretch'
        ].includes(value)
      }
    },
    flex: { type: String, default: '1 1 auto' },
    width: { type: Number, default: null },
    height: { type: Number, default: null },
    order: { type: [String, Number], default: 0 },
    inline: Boolean
  },
  computed: {
    rootStyles: function () {
      return {
        order: this.order,
        alignSelf: this.self,
        width: this.width + 'px',
        height: this.height + 'px',
        flex: this.width || this.height ? 'none' : this.flex,
        display: this.inline ? 'inline-flex' : 'flex'
      }
    },
    gutterStyles: function () {
      return this.$parent.gutter ? { margin: this.$parent.gutter / 2 + 'px' } : null
    }
  }
}
</script>

<style scoped>
.flex-container{
  --style--font: var(--color--font-1);
  --style--border: transparent;
  --style--bakground: transparent;

  color: var(--style--font);
  background-color: var(--style--background);
  border: 1px solid var(--style--border);
}
</style>

<template>
  <div
    class="fx-flex-item"
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
    width: { type: [Number, String], default: null },
    height: { type: Number, default: null },
    order: { type: [String, Number], default: 0 }
  },
  computed: {
    rootStyles: function () {
      return {
        order: this.order,
        alignSelf: this.self,
        width: Number.isInteger(this.width) ? this.width + 'px' : this.width,
        height: this.height + 'px',
        flex: this.width || this.height ? 'none' : this.flex
      }
    },
    gutterStyles: function () {
      return this.$parent.gutter ? { margin: this.$parent.gutter / 2 + 'px' } : null
    }
  },

  created () {
    if (this.$parent.$options._componentTag !== 'fx-flex') {
      this.$destroy()
      throw new Error('fx-flex-item be be placed within a fx-flex wrapper')
    }
  }
}
</script>

<style scoped>
.fx-flex-item {
  --style--font: var(--color--font-1);
  --style--border: transparent;
  --style--bakground: transparent;

  color: var(--style--font);
  background-color: var(--style--background);
  border: 1px solid var(--style--border);
}
</style>

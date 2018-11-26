<template>
  <div
    class="fx-paper"
    :class="[`fx-elevation-${elevation}`, rootClasses]"
    :style="[rootStyles, colorStyles]"
    >
    <slot/>
  </div>
</template>

<script>
import ColorMixin from '@/mixins/colors.js'

export default {
  name: 'FxPaper',

  mixins: [ ColorMixin ],

  props: {
    elevation: { type: Number, default: 1 },
    width: { type: [Number, String], default: null },
    height: { type: [Number, String], default: null },
    radius: { type: String, default: '3px' },
    spacing: {
      type: String,
      default: null,
      validator: (value) => {
        return ['small', 'medium', 'large'].includes(value)
      }
    }
  },

  computed: {
    rootStyles: function () {
      return {
        width: Number.isInteger(this.width) ? this.width + 'px' : this.width,
        height: Number.isInteger(this.height) ? this.height + 'px' : this.height,
        borderRadius: this.radius
      }
    },
    rootClasses: function () {
      return {
        'spacing--small': this.spacing === 'small',
        'spacing--medium': this.spacing === 'medium',
        'spacing--large': this.spacing === 'large'
      }
    }
  }
}
</script>

<style>
.fx-paper {
  --style--font: var(--color--font-1);
  --style--background: var(--color--fill-1);

  background-color: var(--style--background);
  color: var(--style--font);

  &.spacing--small { padding: var(--spacing--small) }
  &.spacing--medium { padding: var(--spacing--medium) }
  &.spacing--large { padding: var(--spacing--large) }
}
</style>

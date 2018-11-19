<template>
  <div
    class="ks-flex"
    :style="[gutterStyles, colorStyles, rootStyles]"
    >
    <slot></slot>
  </div>
</template>

<script>
import ColorMixin from '@/mixins/colors.js'

export default {
  name: 'fx-flex',

  mixins: [ ColorMixin ],

  props: {
    wrap: {
      default: 'nowrap',
      validator: function (value) {
        return [
          'nowrap',
          'wrap',
          'wrap-reverse'
        ].includes(value)
      }
    },
    justifyContent: {
      default: 'flex-start',
      validator: function (value) {
        return [
          'flex-end',
          'flex-start',
          'center',
          'space-between',
          'space-around'
        ].includes(value)
      }
    },
    alignItems: {
      default: 'stretch',
      validator: function (value) {
        return [
          'flex-start',
          'flex-end',
          'center',
          'baseline',
          'stretch'
        ].includes(value)
      }
    },
    direction: {
      default: 'row',
      validator: function (value) {
        return [
          'row',
          'row-reverse',
          'column',
          'column-reverse'
        ].includes(value)
      }
    },
    alignContent: {
      default: 'stretch',
      validator: function (value) {
        return [
          'flex-end',
          'flex-start',
          'center',
          'space-between',
          'space-around',
          'stretch'
        ].includes(value)
      }
    },
    flex: { type: String, default: '1 1 auto' },
    width: { type: [Number, String], default: null },
    height: { type: Number, default: null },
    gutter: { Number, default: 0 },
    inline: Boolean
  },
  computed: {
    rootStyles: function () {
      return {
        flexDirection: this.direction,
        flexWrap: this.wrap,
        justifyContent: this.justifyContent,
        alignItems: this.alignItems,
        width: Number.isInteger(this.width) ? this.width + 'px' : this.width,
        height: this.height + 'px',
        display: this.inline ? 'inline-flex' : 'flex',
        flex: this.flex
      }
    },
    gutterStyles: function () {
      return { padding: this.gutter / 2 + 'px' }
    }
  }
}
</script>

<style>
.ks-flex {
  --style--font: var(--color--font-1);
  --style--border: transparent;
  --style--bakground: transparent;

  color: var(--style--font);
  background-color: var(--style--background);
  border: 1px solid var(--style--border);
}
</style>

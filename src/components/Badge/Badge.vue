<template>
  <span
    class="fx-badge"
    :style="colorStyles"
     >
    <slot/>
    <transition name="scale">
      <span
        class="fx-badge__badge"
        :class="badgeClasses"
        :style="positionStyles"
        v-show="showBadge"
        >
        {{ value }}
      </span>
    </transition>
  </span>
</template>

<script>
import ColorMixin from '@/mixins/colors.js'

export default {
  name: 'FxBadge',

  mixins: [ ColorMixin ],

  props: {
    offsetX: { type: Number, default: 0 },
    offsetY: { type: Number, default: 0 },
    value: { type: Number, default: 0 },
    raised: Boolean,
    outline: Boolean,
    sticky: Boolean,
    position: {
      type: String,
      default: 'right-top',
      validator: value => {
        return [
          'left-top',
          'left-bottom',
          'left-center',
          'right-top',
          'right-bottom',
          'right-center'
        ].includes(value)
      }
    }
  },

  computed: {
    showBadge: function () {
      return this.value > 0 ? true : this.sticky
    },
    badgeClasses: function () {
      return {
        'is-raised': this.raised
      }
    },
    positionStyles: function () {
      let position = {}
      let xAxis = {}
      let yAxis = {}

      xAxis.direction = this.position.includes('left') ? 'left' : 'right'
      xAxis.offset = `calc(100% + (${this.offsetX}px)`

      yAxis.direction = this.position.replace(xAxis.direction + '-', '')
      yAxis.offset = `calc(100% + (${this.offsetY}px)`

      xAxis.direction === 'left'
        ? position.right = xAxis.offset
        : position.left = xAxis.offset

      switch (yAxis.direction) {
        case 'top': {
          position.bottom = yAxis.offset
          break
        }
        case 'bottom': {
          position.top = yAxis.offset
          break
        }
        case 'center': {
          position.top = '50%'
          position.transform = 'translateY(-50%)'
          break
        }
      }

      return position
    }
  }
}
</script>

<style>
.fx-badge {
  --style--font: var(--color--font-i);
  --style--color: var(--color--alert);
  --style--border: var(--color--border);

  position: relative;
  display: inline-block;
  overflow: visible;

  &__badge {
    position: absolute;
    padding: 0 6px;
    border-radius: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 24px;
    min-height: 24px;
    color: var(--style--font);
    background-color: var(--style--color);
    border: 1px solid var(--style--border);

    &.is-raised {
      @mixin elevation 2;
    }
  }
}
</style>

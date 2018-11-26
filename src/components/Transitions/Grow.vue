<template functional>
  <transition
    enter-active-class="fx-grow-enter"
    leave-active-class="fx-grow-leave"
    @before-enter="props.methods.before($event, props)"
    @before-leave="props.methods.before($event, props)"
    >
    <slot/>
  </transition>
</template>

<script>
import easing from '@/utils/easing.js'

export default {
  name: 'FxGrow',

  props: {
    origin: {
      type: String,
      default: 'top left',
      validator: (value) => [
        'top left',
        'top right',
        'bottom left',
        'bottom right',
        'center left',
        'center right',
        'center'
      ].includes(value)
    },
    duration: { type: Number, default: 500 },
    easing: { type: String, default: 'easeInOutExpo' },
    methods: {
      type: Object,
      default () {
        return {
          before: function (el, props) {
            el.style.transformOrigin = props.origin
            el.style.animationTimingFunction = easing(props.easing)
            el.style.animationDuration = `${props.duration}ms`
          }
        }
      }
    }
  }
}
</script>

<style>
.fx-grow-enter { animation-name: fxGrowEnter }
.fx-grow-leave { animation-name: fxGrowLeave }

@keyframes fxGrowEnter {
  from { opacity: 0; transform: scale(0, 0) }
  to { opacity: 1; transform: scale(1, 1) }
}
@keyframes fxGrowLeave {
  from { opacity: 1; transform: scale(1, 1) }
  to { opacity: 0; transform: scale(0, 0) }
}
</style>

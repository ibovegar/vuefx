<template functional>
  <transition
    :enter-active-class="'fx-slide-' + props.enter + '-enter'"
    :leave-active-class="'fx-slide-' + props.leave + '-leave'"
    @before-enter="props.methods.before($event, props)"
    @before-leave="props.methods.before($event, props)"
    >
    <slot/>
  </transition>
</template>

<script>
import easing from '@/utils/easing.js'

export default {
  name: 'FxSlide',

  props: {
    enter: {
      type: String,
      default: 'down',
      validator: (value) => ['left', 'right', 'up', 'down'].includes(value)
    },
    leave: {
      type: String,
      default: 'down',
      validator: (value) => ['left', 'right', 'up', 'down'].includes(value)
    },
    duration: { type: Number, default: 500 },
    easing: { type: String, default: 'easeInSine' },
    methods: {
      type: Object,
      default () {
        return {
          before: function (el, props) {
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
.fx-slide-down-enter { animation-name: fxSlideDownEnter }
.fx-slide-down-leave { animation-name: fxSlideDownLeave }
.fx-slide-up-enter { animation-name: fxSlideUpEnter }
.fx-slide-up-leave { animation-name: fxSlideUpLeave }
.fx-slide-left-enter { animation-name: fxSlideLeftEnter }
.fx-slide-left-leave { animation-name: fxSlideLeftLeave }
.fx-slide-right-enter { animation-name: fxSlideRightEnter }
.fx-slide-right-leave { animation-name: fxSlideRightLeave }

@keyframes fxSlideDownEnter {
  from { opacity: 0; transform: translateY(-20px) }
  to { opacity: 1; transform: translateY(0) }
}
@keyframes fxSlideDownLeave {
  from { opacity: 1; transform: translateY(0) }
  to { opacity: 0; transform: translateY(20px) }
}
@keyframes fxSlideUpEnter {
  from { opacity: 0; transform: translateY(20px) }
  to { opacity: 1; transform: translateY(0) }
}
@keyframes fxSlideUpLeave {
  from { opacity: 1; transform: translateY(0) }
  to { opacity: 0; transform: translateY(-20px) }
}
@keyframes fxSlideLeftEnter {
  from { opacity: 0; transform: translateX(20px) }
  to { opacity: 1; transform: translateY(0) }
}
@keyframes fxSlideLeftLeave {
  from { opacity: 1; transform: translateY(0) }
  to { opacity: 0; transform: translateX(-20px) }
}
@keyframes fxSlideRightEnter {
  from { opacity: 0; transform: translateX(-20px) }
  to { opacity: 1; transform: translateY(0) }
}
@keyframes fxSlideRightLeave {
  from { opacity: 1; transform: translateY(0) }
  to { opacity: 0; transform: translateX(20px) }
}
</style>

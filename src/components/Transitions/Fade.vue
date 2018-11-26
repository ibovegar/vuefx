<template functional>
  <transition
    enter-active-class="fx-fade-enter"
    leave-active-class="fx-fade-leave"
    @before-enter="props.methods.before($event, props)"
    @before-leave="props.methods.before($event, props)"
    >
    <slot/>
  </transition>
</template>

<script>
import easing from '@/utils/easing.js'

export default {
  name: 'FxFade',

  props: {
    duration: { type: Number, default: 500 },
    easing: { type: String, default: 'easeInOutExpo' },
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
.fx-fade-enter { animation-name: fxFadeEnter }
.fx-fade-leave { animation-name: fxFadeLeave }

@keyframes fxFadeEnter {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes fxFadeLeave {
  from { opacity: 1 }
  to { opacity: 0 }
}
</style>

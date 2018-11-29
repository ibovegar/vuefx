<template>
  <div class="fx-animate-height">
    <slot/>
  </div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill'
import _throttle from 'lodash/throttle'

export default {
  name: 'FxAnimateHeight',

  mounted () {
    this.$nextTick(() => {
      const handleResize = _throttle(entries => {
        const current = entries[0].contentRect

        this.$el.style.height = current.height + 'px'

        if (this.previous) {
          if (current.height > this.previous.height) {
            this.$emit('increase', current.height - this.previous.height)
          }
          else if (current.height < this.previous.height) {
            this.$emit('decrease', this.previous.height - current.height)
          }
        }
      }, 200)

      new ResizeObserver(handleResize).observe(this.$children[0].$el)
    })

    this.$el.style.height = this.$el.scrollHeight + 'px'
  }
}
</script>

<style>
.fx-animate-height {
  transition: height 0.4s var(--easing--inf-outs);
}
</style>

<template>
  <span
    class="fx-popover"
    :style="{ width: width + 'px' }"
    v-click-outside="forceShow ? '' : doClose"
    >
    <transition @after-leave="doDestroy">
      <span
        v-show="!disabled && showPopper"
        ref="popper"
        class="popper"
        >
        <slot></slot>
      </span>
    </transition>
    <slot name="trigger"></slot>
  </span>
</template>

<script>
import ClickOutside from '@/directives/click-outside'
import PopperMixin from '@/mixins/popper.js'
import { on, off } from '@/utils/helpers'

export default {
  name: 'fx-popover',

  directives: { ClickOutside },

  mixins: [ PopperMixin ],

  props: {
    width: Number
  },

  methods: {
    doShow () {
      this.showPopper = true

      this.$nextTick(() => {
        for (let el of this.$refs.popper.querySelectorAll('[close-popover]')) {
          on(el, 'click', this.doClose)
        }
      })
    },
    doClose () {
      if (this.showPopper) {
        for (let el of this.$refs.popper.querySelectorAll('[close-popover]')) {
          off(el, 'click', this.doClose)
        }
      }
      this.showPopper = false
    }
  },

  mounted () {
    let ref = this.reference || this.$slots.trigger[0].elm
    this.doMount('popover', this.$refs.popper, ref)
  }
}
</script>

<style>
.fx-popover {
  width: auto;

  .popper {
    width: inherit;
    z-index: var(--z-index--popover);
    border-radius: var(--border-radius--medium);
    background: var(--color--fill);
    @mixin elevation 7;
    @mixin font-size 14;

    &[x-out-of-boundaries] {
      display: hidden;
      opacity: 0;
    }
  }
}
</style>

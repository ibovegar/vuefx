<template>
  <div class="component-debug">
    <transition
      @before-enter="beforeEnter"
      @enter="slideIn"
      @leave="slideOut"
      >
      <div v-if="open" class="debug-panel" :style="{ width: width + '%' }">
        <slot name="debug"/>
      </div>
    </transition>
    <slot/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false
    }
  },

  props: {
    show: Boolean,
    width: Number
  },

  methods: {
    beforeEnter: function (el) {
      el.style.marginLeft = `-${this.width}%`
    },
    slideIn: function (el) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          el.style.marginLeft = null
        })
      })
    },
    slideOut: function (el) {
      el.style.marginLeft = `-${this.width}%`
    }
  }
}
</script>

<style>
.component-debug {
  display: flex;

  .debug-panel {
    padding-right: 40px;
    transition: margin-left .3s var(--easing--inf-outs);
  }
}
</style>

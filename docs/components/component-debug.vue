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
    <span class="component-panel">
      <slot/>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: this.show
    }
  },

  props: {
    show: Boolean,
    width: Number
  },

  methods: {
    beforeEnter: function (el) {
      el.style.opacity = '1'
      el.style.marginLeft = `-${this.width}%`
    },
    slideIn: function (el) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          el.style.marginLeft = '0'
          el.style.opacity = null
        })
      })
    },
    slideOut: function (el) {
      el.style.opacity = '0'
      el.style.marginLeft = `-${this.width}%`
    }
  }
}
</script>

<style>
.component-debug {
  display: flex;

  .component-panel {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .debug-panel {
    transition: all .3s var(--easing--inf-outs);
  }
}
</style>

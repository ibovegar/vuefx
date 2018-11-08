<template>
  <div
    class="fx-chip-group"
    v-drag-scroll
    >
    <slot/>
  </div>
</template>

<script>
import DragScroll from '@/directives/drag-scroll'

export default {
  name: 'fx-chip-group',

  directives: { DragScroll },

  updated () {
    this.checkOverflow()
  },

  methods: {
    checkOverflow: function () {
      this.$el.clientWidth < this.$el.scrollWidth
        ? this.$el.classList.add('has-overflow')
        : this.$el.classList.remove('has-overflow')
    }
  },

  mounted () {
    this.checkOverflow()
  }
}
</script>

<style>
.fx-chip-group {
  overflow: hidden;
  display: flex;
  flex-direction: row;

  .fx-chip {
    margin-left: 4px;

    &:first-child {
      margin-left: 0;
    }
  }

  &.has-overflow {
    cursor: grab;
  }
}
</style>

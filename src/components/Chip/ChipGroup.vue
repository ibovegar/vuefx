<template>
  <div
    class="fx-chip-group"
    :class="rootClasses"
    :style="colorStyles"
    v-drag-scroll
    >
    <slot/>
  </div>
</template>

<script>
import DragScroll from '@/directives/drag-scroll'
import ColorMixin from '@/mixins/colors.js'

export default {
  name: 'fx-chip-group',

  mixins: [ ColorMixin ],

  directives: { DragScroll },

  props: {
    scrollable: Boolean,
    align: {
      type: String,
      default: 'left',
      validator: value => { return ['left', 'right', 'center'].includes(value) }
    }
  },

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

  computed: {
    rootClasses: function () {
      return {
        'is-left': this.align === 'left',
        'is-right': this.align === 'right',
        'is-center': this.align === 'center',
        'is-scrollable': this.scrollable
      }
    }
  },

  mounted () {
    this.checkOverflow()
  }
}
</script>

<style>
.fx-chip-group {
  --style--font: var(--color--font-1);
  --style--background: transparent;
  --style--border: transparent;
  --style--color: var(--color--primary);

  --fx-chip-group--spacing: 5px;

  border: 1px solid var(--style--border);
  background-color: var(--style--background);
  padding: calc(var(--fx-chip-group--spacing) * 2);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  //max-width: 500px;

  &.is-scrollable {

  }

  &.is-left {
    justify-content: left;
    .fx-chip { margin-left: 0px }
  }

  &.is-center {
    justify-content: center;
  }

  &.is-right {
    justify-content: right;
    .fx-chip { margin-right: 0px }
  }

  .fx-chip {
    //margin: var(--fx-chip-group--spacing);
  }

  &.has-overflow {
    cursor: grab;
  }
}
</style>

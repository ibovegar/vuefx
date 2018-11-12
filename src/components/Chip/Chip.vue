<template>
  <span
    class="fx-chip"
    :class="rootClasses"
    :style="colorStyles"
    >
    <slot/>
    <fx-icon
      v-if="close"
      name="close-circle"
      class="tiny"
      @click.native.stop="$emit('input', value)"
      />
  </span>
</template>

<script>
import ColorMixin from '@/mixins/colors.js'

export default {
  name: 'fx-chip',

  mixins: [ ColorMixin ],

  props: {
    value: String,
    close: Boolean,
    raised: Boolean
  },

  computed: {
    rootClasses: function () {
      return {
        'is-raised': this.raised
      }
    }
  }
}
</script>

<style>
.fx-chip {
  --style--font: var(--color--font-1);
  --style--background: var(--color--fill-6);
  --style--border: transparent;
  --style--color: var(--color--primary);

  display: flex;
  flex-direction: row;
  display: inline-flex;
  align-items: center;
  border-radius: 500px;
  border: 1px solid var(--style--border);
  height: var(--fx-chip--height);
  padding: 0 var(--spacing--medium);
  color: var(--style--font);
  background-color: var(--style--background);

  &.is-raised {
    @mixin elevation 2;
  }

  .fx-icon[name="close-circle"] {
    cursor: pointer;
    margin-left: 8px;
    margin-right: -6px;
    color: var(--style--font);
    opacity: 0.4;
    border-radius: 100%;

    &:hover {
      opacity: 1;
    }
  }
}
</style>

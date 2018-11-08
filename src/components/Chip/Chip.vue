<template>
  <div
    class="fx-chip"
    :class="{ 'has-outline': outline}"
    :style="[ backgroundColor, fontColor ]"
    >
    <slot/>
    <fx-icon
      v-if="close"
      name="close"
      class="tiny"
      @click.native.stop="$emit('input', value)"
      />
  </div>
</template>

<script>
export default {
  name: 'fx-chip',

  props: {
    value: String,
    close: Boolean,
    background: String,
    font: String,
    outline: Boolean
  },

  computed: {
    backgroundColor: function () {
      return this.outline
        ? { '--fx-chip--border-color': `var(--color--${this.background})` }
        : { '--fx-chip--background-color': `var(--color--${this.background})` }
    },
    fontColor: function () {
      return { '--fx-chip--font-color': `var(--color--${this.font})` }
    }
  }
}
</script>

<style>
.fx-chip {
  display: flex;
  flex-direction: row;
  display: inline-flex;
  align-items: center;
  border-radius: 500px;
  border: 1px solid;
  height: var(--fx-chip--height);
  padding: 0 var(--spacing--medium);
  color: var(--fx-chip--font-color);
  border-color: var(--fx-chip--border-color);
  background-color: var(--fx-chip--background-color);
  @mixin font-size 14;

  &.has-outline { --fx-chip--background-color: 'transparent' }

  .fx-icon[name="close"] {
    cursor: pointer;
    margin-left: 8px;
    margin-right: -6px;
    color: var(--chip--background-color);
    opacity: 0.4;
    border-radius: 100%;

    &:hover {
      background-color: var(--color--secondary);
    }
  }
}
</style>

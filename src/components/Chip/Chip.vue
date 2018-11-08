<template>
  <div
    class="ks-chip"
    :class="{ 'has-outline': outline}"
    :style="[ backgroundColor, fontColor ]"
    >
    <slot/>
    <ks-icon
      v-if="close"
      name="close"
      @click.native.stop="$emit('input', value)"
      class="ks-icon--tiny"
      />
  </div>
</template>

<script>
export default {
  name: 'ks-chip',

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
        ? { '--ks-chip--border-color': `var(--color--${this.background})` }
        : { '--ks-chip--background-color': `var(--color--${this.background})` }
    },
    fontColor: function () {
      return { '--ks-chip--font-color': `var(--color--${this.font})` }
    }
  }
}
</script>

<style>
.ks-chip {
  display: flex;
  flex-direction: row;
  display: inline-flex;
  align-items: center;
  border-radius: 500px;
  border: 1px solid;
  height: var(--ks-chip--height);
  padding: 0 var(--spacing--medium);
  color: var(--ks-chip--font-color);
  border-color: var(--ks-chip--border-color);
  background-color: var(--ks-chip--background-color);
  @mixin font-size 14;

  &.has-outline {
    --ks-chip--background-color: 'transparent'
  }

  .ks-icon[name="close"] {
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

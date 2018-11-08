<template>
  <div class="fx-badge">
    <slot/>
    <span
      class="badge"
      :style="{ top: offsetY + 'px', right: offsetX + 'px' }"
      :class="{ 'expanded': (value > 9) }"
      v-show="value > 0"
      >
      {{ value }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'fx-badge',

  props: {
    offsetX: Number,
    offsetY: Number,
    autoHide: { type: Boolean, default: true }, // true -> Hide badge if value === 0
    value: { type: Number, default: 0, required: true }
  }
}
</script>

<style>
.fx-badge {
  position: relative;

  .badge {
    position: absolute;
    top: 0px;
    right: 0px;
    height: var(--fx-badge--height);
    min-width: var(--fx-badge--height);
    line-height: var(--fx-badge--height);
    text-align: center;
    font-weight: var(--font-weight--bold);
    border-radius: calc(var(--fx-badge--height) / 2);
    color: var(--color--font-i);
    background-color: var(--color--alert);
    @mixin font-size 10;
  }

  &.expanded {
    padding: 0 4px;
  }
}
</style>

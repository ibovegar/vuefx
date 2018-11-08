<template>
  <div class="ks-badge">
    <slot/>
    <span
      class="ks-badge__badge"
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
  name: 'ks-badge',

  props: {
    offsetX: Number,
    offsetY: Number,
    autoHide: { type: Boolean, default: true }, // true -> Hide badge if value === 0
    value: { type: Number, default: 0, required: true }
  }
}
</script>

<style>
.ks-badge {
  position: relative;

  &__badge {
    position: absolute;
    top: 0px;
    right: 0px;
    height: var(--ks-badge--height);
    min-width: var(--ks-badge--height);
    line-height: var(--ks-badge--height);
    text-align: center;
    font-weight: var(--font-weight--bold);
    border-radius: calc(var(--ks-badge--height) / 2);
    color: var(--color--font-i);
    background-color: var(--color--alert);
    font-size: var(--font-size--10);
  }

  &.expanded {
    padding: 0 4px;
  }
}
</style>

<template>
  <svg
    class="fx-icon small"
    :name="name"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    :style="{ width: size + 'px', height: size + 'px' }"
    :viewBox="`0 0 ${viewBox} ${viewBox}`"
    >
    <g :fill="iconColor">
      <component :is="'i-' + name"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'fx-icon',

  props: {
    name: String,
    viewBox: { type: Number, default: 24 },
    iconName: { type: String, default: 'box' },
    size: [Number, String],
    iconColor: { type: String, default: 'currentColor' }
  }
}
</script>

<style>
.fx-icon {
  vertical-align: middle;
  display: inline-block;
  width: 24px;
  height: 24px;

  &.right { transform: rotate(0deg) }
  &.primary { color: var(--color--primary) }
  &.secondary { color: var(--color--secondary) }
  &.flip-v { transform: rotate(-180deg) }
  &.up { transform: rotate(-90deg) }
  &.right { transform: rotate(0deg) } /*default*/
  &.down { transform: rotate(90deg) }

  &.tiny {
    height: var(--icon-size--tiny) !important;
    width: var(--icon-size--tiny) !important;
  }

  &.small {
    height: var(--icon-size--small) !important;
    width: var(--icon-size--small) !important;
  }

  &.medium {
    height: var(--icon-size--medium) !important;
    width: var(--icon-size--medium) !important;
  }

  &.large {
    height: var(--icon-size--large) !important;
    width: var(--icon-size--large) !important;
  }
}
</style>

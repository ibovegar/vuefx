<template functional>
  <svg
    class="fx-icon"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :viewBox="`0 0 ${props.viewBox} ${props.viewBox}`"
    :name="props.name"
    :class="{
      'rotate-90': props.rotate90,
      'rotate-180': props.rotate180,
      'rotate-270': props.rotate270,
      'flip-h': props.flipH,
      'flip-v': props.flipV,
      'spin': props.spin,
      'tiny': props.tiny,
      'small': props.small,
      'medium': props.medium,
      'large': props.large,
      'font-1': props.font1,
      'font-2': props.font2,
      'font-3': props.font3,
      'font-4': props.font4,
      'font-5': props.font5,
      'font-6': props.font6,
      'font-i': props.fontI
    }"
    >
    <g :fill="props.iconColor">
      <component :is="'i-' + props.name"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'FxIcon',

  props: {
    name: String,
    viewBox: { type: Number, default: 24 },
    iconColor: { type: String, default: 'currentColor' },
    rotate90: Boolean,
    rotate180: Boolean,
    rotate270: Boolean,
    flipH: Boolean,
    flipV: Boolean,
    spin: Boolean,
    tiny: Boolean,
    small: Boolean,
    medium: Boolean,
    large: Boolean,
    huge: Boolean,
    font1: Boolean,
    font2: Boolean,
    font3: Boolean,
    font4: Boolean,
    font5: Boolean,
    font6: Boolean,
    fontI: Boolean
  }
}
</script>

<style>
.fx-icon {
  vertical-align: middle;
  display: inline-block;
  width: 24px;
  height: 24px;
  transition: all .5s var(--easing--inf-outs);
  color: var(--color--font-1);

  &.rotate-90 { transform: rotate(90deg) }
  &.rotate-180 { transform: rotate(180deg) }
  &.rotate-270 { transform: rotate(270deg) }
  &.flip-v { transform: scaleY(-1) }
  &.flip-h {  transform: scaleX(-1) }
  &.spin { animation: icon-spin 0.8s infinite linear }
  &.font-1 { color: var(--color--font-1) }
  &.font-2 { color: var(--color--font-2) }
  &.font-3 { color: var(--color--font-3) }
  &.font-4 { color: var(--color--font-4) }
  &.font-5 { color: var(--color--font-5) }
  &.font-6 { color: var(--color--font-6) }
  &.font-i { color: var(--color--font-i) }

  &.tiny {
    height: var(--icon-size--tiny);
    width: var(--icon-size--tiny);
  }

  &.small {
    height: var(--icon-size--small);
    width: var(--icon-size--small);
  }

  &.medium {
    height: var(--icon-size--medium);
    width: var(--icon-size--medium);
  }

  &.large {
    height: var(--icon-size--large);
    width: var(--icon-size--large);
  }
}

@keyframes icon-spin {
  0%  { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
</style>

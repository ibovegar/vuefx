<template functional>
  <div
    class="fx-paper"
    :class="`fx-elevation-${props.elevation}`"
     >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'FxPaper',

  props: {
    elevation: { type: Number, default: 0 },
  }
}
</script>

<style>
.fx-paper {
  --style--font: var(--color--font-1);
  --style--background: var(--color--fill-1);
  --style--border: var(--color--fill-1);

  background-color: var(--style--background);
  color: var(--style--font);
  border: 1px solid var(--style--border);
}
</style>

<template>
  <section>
    <fx-popover :inherit-width="true">
      <button slot="trigger">Inherit width</button>
      <div class="wrapper"><p>Inherit width of trigger</p></div>
    </fx-popover>
    <fx-popover :width="300">
      <button slot="trigger">Custom width</button>
      <div class="wrapper"><p>Width set to 300px</p></div>
    </fx-popover>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.wrapper {
  padding: var(--spacing--small) var(--spacing--medium);
}
</style>

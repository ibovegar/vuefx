<template>
  <section>
    <fx-popover :inherit-width="true">
      <button slot="trigger">Inherit width</button>
      <div class="wrapper"><p>Inherit width of trigger</p></div>
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

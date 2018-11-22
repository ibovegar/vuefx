<template>
  <section>
    <Popover :inherit-width="true">
      <button slot="trigger">Inherit width</button>
      <div class="wrapper"><p>Inherit width of trigger</p></div>
    </Popover>
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

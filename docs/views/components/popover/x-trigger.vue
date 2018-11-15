<template>
  <section>
    <fx-popover>
      <fx-icon slot="trigger" name="icon-close"/>
      <p close-popover>Click here to close</p>
    </fx-popover>
    <fx-popover>
      <button slot="trigger">
        SHOW POPOVER
      </button>
      <p close-popover>Click here to close</p>
    </fx-popover>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
p {
  padding: 0 var(--spacing--medium);
  text-align: center;
}
</style>

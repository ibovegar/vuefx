<template>
  <section>
    <fx-popover>
      <fx-icon slot="trigger" name="icon-close"/>
      <p close-popover>Click here to close</p>
    </fx-popover>
    <fx-popover>
      <fx-button
        custom-color="primary"
        size="medium"
        :fluid="true"
        slot="trigger"
        >
        SHOW POPOVER
        </fx-button>
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

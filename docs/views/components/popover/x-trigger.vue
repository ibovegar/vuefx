<template>
  <section>
    <Popover>
      <Icon slot="trigger" name="icon-close"/>
      <p close-popover>Click here to close</p>
    </Popover>
    <Popover>
      <button slot="trigger">
        SHOW POPOVER
      </button>
      <p close-popover>Click here to close</p>
    </Popover>
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

<template>
  <section>
    <fx-chip raised>Apple</fx-chip>
    <fx-chip raised close>Banana</fx-chip>
  </section>
</template>

<style scoped>
.fx-chip + .fx-chip {
  margin-left: var(--spacing--medium);
}
</style>

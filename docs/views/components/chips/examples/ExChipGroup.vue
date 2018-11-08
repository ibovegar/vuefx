<template>
  <section>
    <div class="wrapper">
      <fx-chip-group>
        <fx-chip background="fill-2" font="primary-in verted" close>Apple</fx-chip>
        <fx-chip background="fill-2" font="primary-inverted" close>Banana</fx-chip>
        <fx-chip background="fill-2" font="primary-inverted" close>Orange</fx-chip>
        <fx-chip background="fill-2" close>Kiwi</fx-chip>
        <fx-chip background="fill-2" close>Pineapple</fx-chip>
        <fx-chip background="fill-2" close>Pear</fx-chip>
      </fx-chip-group>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  border: 1px solid var(--color--border);
  padding: var(--spacing--large) var(--spacing--small);
  width: 400px;
}
</style>

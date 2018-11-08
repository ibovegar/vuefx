<template>
  <section>
    <fx-chip background="primary" font="flat" close>Apple</fx-chip>
    <fx-chip background="alert" font="flat" close>Banana</fx-chip>
    <fx-chip background="alert" font="alert" close outline>Orange</fx-chip>
    <fx-chip background="warning">Kiwi</fx-chip>
    <fx-chip background="info">Pineapple</fx-chip>
    <fx-chip background="fill-1" close>Strawberry</fx-chip>
    <fx-chip background="fill-2" close>Pear</fx-chip>
    <fx-chip background="fill-3" close>Peach</fx-chip>
  </section>
</template>

<style scoped>
.fx-chip + .fx-chip {
  margin-left: var(--spacing--small);
}
</style>

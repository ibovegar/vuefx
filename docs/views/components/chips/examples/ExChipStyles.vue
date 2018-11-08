<template>
  <section>
    <ks-chip background="primary" font="flat" close>Apple</ks-chip>
    <ks-chip background="alert" font="flat" close>Banana</ks-chip>
    <ks-chip background="alert" font="alert" close outline>Orange</ks-chip>
    <ks-chip background="warning">Kiwi</ks-chip>
    <ks-chip background="info">Pineapple</ks-chip>
    <ks-chip background="fill-1" close>Strawberry</ks-chip>
    <ks-chip background="fill-2" close>Pear</ks-chip>
    <ks-chip background="fill-3" close>Peach</ks-chip>
  </section>
</template>

<style scoped>
.ks-chip + .ks-chip {
  margin-left: var(--spacing--small);
}
</style>

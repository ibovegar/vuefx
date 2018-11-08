<template>
  <section>
    <div class="wrapper">
      <ks-chip-group>
        <ks-chip background="fill-2" font="primary-in verted" close>Apple</ks-chip>
        <ks-chip background="fill-2" font="primary-inverted" close>Banana</ks-chip>
        <ks-chip background="fill-2" font="primary-inverted" close>Orange</ks-chip>
        <ks-chip background="fill-2" close>Kiwi</ks-chip>
        <ks-chip background="fill-2" close>Pineapple</ks-chip>
        <ks-chip background="fill-2" close>Pear</ks-chip>
      </ks-chip-group>
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

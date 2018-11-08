<template>
  <section>
    <ks-popover :options="{ placement: 'bottom' }">
      <ks-button slot="trigger">BOTTOM</ks-button>
      <p>Bottom</p>
    </ks-popover>
    <ks-popover :options="{ placement: 'top' }">
      <ks-button slot="trigger">TOP</ks-button>
      <p>Top</p>
    </ks-popover>
    <ks-popover :options="{ placement: 'left' }">
      <ks-button slot="trigger">LEFT</ks-button>
      <p>Left</p>
    </ks-popover>
    <ks-popover :options="{ placement: 'right' }">
      <ks-button slot="trigger">RIGHT</ks-button>
      <p>Right</p>
    </ks-popover>
  </section>
</template>

<style scoped>
p {
  padding: 0 var(--spacing--medium);
}
</style>

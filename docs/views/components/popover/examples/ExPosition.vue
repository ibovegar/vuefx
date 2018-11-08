<template>
  <section>
    <fx-popover :options="{ placement: 'bottom' }">
      <fx-button slot="trigger">BOTTOM</fx-button>
      <p>Bottom</p>
    </fx-popover>
    <fx-popover :options="{ placement: 'top' }">
      <fx-button slot="trigger">TOP</fx-button>
      <p>Top</p>
    </fx-popover>
    <fx-popover :options="{ placement: 'left' }">
      <fx-button slot="trigger">LEFT</fx-button>
      <p>Left</p>
    </fx-popover>
    <fx-popover :options="{ placement: 'right' }">
      <fx-button slot="trigger">RIGHT</fx-button>
      <p>Right</p>
    </fx-popover>
  </section>
</template>

<style scoped>
p {
  padding: 0 var(--spacing--medium);
}
</style>

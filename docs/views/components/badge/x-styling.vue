<template>
  <section>
    <fx-badge :value="12">
      Default color
    </fx-badge>
    <fx-badge :value="456" fill="primary">
      Custom color
    </fx-badge>
    <fx-badge :value="5" fill="fill-1" border="alert" font="alert">
      Outline
    </fx-badge>
    <fx-badge :value="7" fill="fill-1" font="font-1" raised>
      Raised
    </fx-badge>
  </section>
</template>

<style scoped>
section {
  text-align: center;
}

.fx-badge + .fx-badge {
  margin-left: 50px;
}

.fx-icon {
  color: var(--color--font-4);
}
</style>

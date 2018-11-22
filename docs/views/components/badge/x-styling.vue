<template>
  <section>
    <Badge :value="12">Default color</Badge>
    <Badge :value="456"  fx-color="primary">Custom color</Badge>
    <Badge :value="5" fx-color="fill-1" fx-border="alert" fx-font="alert">Outline</Badge>
    <Badge :value="7" fx-color="fill-1" fx-font="font-1" raised>Raised</Badge>
  </section>
</template>

<style scoped>
section {
  text-align: center;
}

.fx-badge + .fx-badge {
  margin-left: 50px;
}
</style>

<template>
  <section>
    <fx-chip :fx-styles="primary" close>Apple</fx-chip>
    <fx-chip :fx-styles="primary" raised>Apple</fx-chip>
    <fx-chip fx-background="alert" fx-font="font-i" close>Banana</fx-chip>
    <fx-chip fx-background="alert" fx-font="font-i" raised>Orange</fx-chip>
    <fx-chip :fx-styles="outline">Kiwi</fx-chip>
    <fx-chip :fx-styles="outline" close>Kiwi</fx-chip>
    <fx-chip fx-background="fill-1" fx-font="font-2" raised close>Strawberry</fx-chip>
  </section>
</template>

<script>
export default {
  data () {
    return {
      primary: {
        background: 'primary',
        font: 'font-i'
      },
      outline: {
        background: 'none',
        font: 'info',
        border: 'info'
      }
    }
  }
}
</script>

<style scoped>
.fx-chip + .fx-chip {
  margin-left: var(--spacing--small);
}
</style>

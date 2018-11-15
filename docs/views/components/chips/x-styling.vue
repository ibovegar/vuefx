<template>
  <section>
    <fx-chip :fx-styles="primary" close raised>Apple</fx-chip>
    <fx-chip fx-background="alert" fx-font="font-i" close raised>Banana</fx-chip>
    <fx-chip :fx-styles="outline" close>Kiwi</fx-chip>
    <fx-chip fx-background="fill-1" fx-font="font-2" raised close>Strawberry</fx-chip>
    <fx-chip :height="10" fx-font="font-2">I am really slim</fx-chip>
    <fx-chip :height="60" fx-font="font-2" raised>I am really tall</fx-chip>
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
  margin-left: var(--spacing--medium);
}
</style>

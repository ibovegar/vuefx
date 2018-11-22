<template>
  <section>
    <Chip raised>Apple</Chip>
    <Chip raised close>Banana</Chip>
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
      },
      classes: {
        '-fx-chip': {

        }
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

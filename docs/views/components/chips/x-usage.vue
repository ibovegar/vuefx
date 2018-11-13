<template>
  <section>
    <fx-chip raised>Apple</fx-chip>
    <fx-chip raised close>Banana</fx-chip>
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

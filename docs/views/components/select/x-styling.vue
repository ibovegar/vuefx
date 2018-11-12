<template>
  <section>
    <fx-select
      label="Default style"
      :options="types"
      v-model="selectedTypes"
      fixed
      />
    <fx-select
      label="Secondary colors"
      :options="types"
      fx-color="secondary"
      fx-font="secondary"
      fx-border="secondary"
      v-model="selectedTypes"
      fixed
      />
    <fx-select
      label="Alert colors"
      :options="types"
      fx-color="alert"
      fx-border="alert"
      fx-font="alert"
      v-model="selectedTypes"
      fixed
      />
    <fx-select
      label="Soft colors"
      :options="types"
      fx-color="font-5"
      fx-border="border-4"
      fx-font="font-3"
      v-model="selectedTypes"
      fixed
      />
    <fx-select
      label="Mixed colors"
      :options="types"
      :fx-styles="customStyles"
      v-model="selectedTypes"
      fixed
      />
  </section>
</template>

<script>
export default {
  data () {
    return {
      customStyles: {
        color: 'secondary',
        border: 'warning',
        font: 'primary'
      },
      selectedTypes: [],
      types: [
        { name: 'Apple', value: 'fruit_1' },
        { name: 'Banana', value: 'fruit_2' },
        { name: 'Orange', value: 'fruit_3' },
        { name: 'Kiwi', value: 'fruit_4' }
      ]
    }
  }
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;

  .fx-select {
    margin-right: 20px;
  }
 }
</style>

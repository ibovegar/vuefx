<template>
  <section>
    <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" fixed/>
    <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" fixed/>
    <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" fixed/>
    <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" fixed/>
    <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" theme="boxed" fixed/>
    <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" theme="boxed" fixed/>
    <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" theme="boxed" fixed/>
    <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" theme="boxed" fixed/>
  </section>
</template>

<script>
export default {
  data () {
    return {
      selectedFruit: '',
      fruits: [
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
  &:after {
    content: "";
    display: table;
    clear: both;
  }

  .fx-select {
    margin: 20px 0;
    float: left;
    margin-right: 20px;
    width: 145px;
  }
}
</style>

<template>
  <section>
    <div class="wrapper">
      <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" fixed/>
      <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" fixed/>
      <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" fixed/>
      <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" fixed/>
    </div>
    <div class="wrapper">
      <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" theme="boxed" fixed/>
      <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" theme="boxed" fixed/>
      <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" theme="boxed" fixed/>
      <fx-select v-model="selectedFruit" label="Fruit" :options="fruits" theme="boxed" fixed/>
    </div>
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
div + div {
  margin-bottom: 30px;
}

.wrapper {
  display: flex;
  flex-direction: row;

  .fx-select {
    margin-right: 20px;
  }
}

.wrapper + .wrapper {
  margin-top: 50px;
}
</style>

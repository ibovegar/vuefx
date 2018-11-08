<template>
  <section>
    <div class="wrapper">
      <ks-select v-model="selectedFruit" label="Fruit" :options="fruits" fixed/>
      <ks-select v-model="selectedFruit" label="Fruit" :options="fruits" fixed/>
      <ks-select v-model="selectedFruit" label="Fruit" :options="fruits" fixed/>
      <ks-select v-model="selectedFruit" label="Fruit" :options="fruits" fixed/>
    </div>
    <div class="wrapper">
      <ks-select v-model="selectedFruit" label="Fruit" :options="fruits" theme="boxed" fixed/>
      <ks-select v-model="selectedFruit" label="Fruit" :options="fruits" theme="boxed" fixed/>
      <ks-select v-model="selectedFruit" label="Fruit" :options="fruits" theme="boxed" fixed/>
      <ks-select v-model="selectedFruit" label="Fruit" :options="fruits" theme="boxed" fixed/>
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

  .ks-select {
    margin-right: 20px;
  }
}

.wrapper + .wrapper {
  margin-top: 50px;
}
</style>

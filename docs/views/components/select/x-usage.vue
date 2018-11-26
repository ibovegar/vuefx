<template>
  <Flex :gutter="40" justify-content="center" wrap>
    <Select v-model="model" label="Fruit" :options="fruits" :width="width" fixed/>
    <Select v-model="model" label="Fruit" :options="fruits" :width="width" fixed/>
    <Select v-model="model" label="Fruit" :options="fruits" :width="width" fixed/>
    <Select v-model="model" label="Fruit" :options="fruits" :width="width" fixed/>
    <Select v-model="model" label="Fruit" :options="fruits" :width="width" fixed boxed />
    <Select v-model="model" label="Fruit" :options="fruits" :width="width" fixed boxed/>
    <Select v-model="model" label="Fruit" :options="fruits" :width="width" fixed boxed/>
    <Select v-model="model" label="Fruit" :options="fruits" :width="width" fixed boxed/>
  </Flex>
</template>

<script>
export default {
  data () {
    return {
      width: 160,
      model: '',
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

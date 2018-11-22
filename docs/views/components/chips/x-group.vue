<template>
  <Flex direction="column" :gutter="40">
    <Flex direction="column" align-items="center">
      <h3>Centered</h3>
      <ChipGroup align="center">
        <Chip v-for="fruit in fruits" :key="fruit" :fx-styles="outline">{{ fruit }}</Chip>
      </ChipGroup>
    </Flex>
    <Flex direction="column" align-items="center">
      <h3>Left aligned</h3>
      <ChipGroup>
        <Chip v-for="fruit in fruits" :key="fruit" :fx-styles="outline">{{ fruit }}</Chip>
      </ChipGroup>
    </Flex>
    <Flex direction="column" align-items="center">
      <h3>Right aligned</h3>
      <ChipGroup align="right">
        <Chip v-for="fruit in fruits" :key="fruit" :fx-styles="outline">{{ fruit }}</Chip>
      </ChipGroup>
    </Flex>
    <Flex direction="column" align-items="center">
      <h3>Scrollable</h3>
      <ChipGroup draggable>
        <Chip v-for="fruit in fruits" :key="fruit" :fx-styles="outline">{{ fruit }}</Chip>
      </ChipGroup>
    </Flex>
  </Flex>
</template>

<script>
export default {
  data () {
    return {
      fruits: [
        'Apple & Kiwi',
        'Strawberry',
        'Orange',
        'Lime & Mango',
        'Pear',
        'Banana & Lemon',
        'Pineapple',
        'Watermelon'
      ],
      outline: {
        background: 'fill-1',
        font: 'font-3',
        border: 'border-3'
      }
    }
  }
}
</script>

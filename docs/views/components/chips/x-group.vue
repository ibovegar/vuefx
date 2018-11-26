<template>
  <Flex dir="column" :gutter="40">
    <p>Centered</p>
    <Paper spacing="large">
      <ChipGroup align="center" :gutter="10">
        <Chip v-for="fruit in fruits" :key="fruit" :fx-styles="chip" raised>{{ fruit }}</Chip>
      </ChipGroup>
    </Paper>
    <p>Left aligned</p>
    <Paper spacing="large">
      <ChipGroup :gutter="10">
        <Chip v-for="fruit in fruits" :key="fruit" :fx-styles="chip" raised>{{ fruit }}</Chip>
      </ChipGroup>
    </Paper>
    <p>Right aligned</p>
    <Paper spacing="large">
      <ChipGroup align="right" :gutter="10">
        <Chip v-for="fruit in fruits" :key="fruit" :fx-styles="chip" raised>{{ fruit }}</Chip>
      </ChipGroup>
    </Paper>
    <p>Scrollable</p>
    <Paper spacing="large">
      <ChipGroup :gutter="10" draggable>
        <Chip v-for="fruit in fruits" :key="fruit" :fx-styles="chip" raised>{{ fruit }}</Chip>
      </ChipGroup>
    </Paper>
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
      chip: {
        background: 'fill-3',
        font: 'font-3'
      }
    }
  }
}
</script>

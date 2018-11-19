<template>
  <fx-flex direction="column" :gutter="40">
    <fx-flex-item>
      <fx-flex direction="column" align-items="center">
        <h3>Centered</h3>
        <fx-chip-group align="center">
          <fx-chip
            v-for="fruit in fruits" :key="fruit" :fx-styles="outline">{{ fruit }}</fx-chip>
        </fx-chip-group>
      </fx-flex>
    </fx-flex-item>
    <fx-flex-item flex="1">
      <fx-flex direction="column" align-items="center">
        <h3>Left aligned</h3>
        <fx-chip-group>
          <fx-chip v-for="fruit in fruits" :key="fruit" :fx-styles="outline">{{ fruit }}</fx-chip>
        </fx-chip-group>
      </fx-flex>
    </fx-flex-item>
    <fx-flex-item>
      <fx-flex direction="column" align-items="center">
        <h3>Right aligned</h3>
        <fx-chip-group align="right">
          <fx-chip v-for="fruit in fruits" :key="fruit" :fx-styles="outline">{{ fruit }}</fx-chip>
        </fx-chip-group>
      </fx-flex>
    </fx-flex-item>
    <fx-flex-item>
      <fx-flex direction="column" align-items="center">
        <h3>Scrollable</h3>
        <fx-chip-group draggable>
          <fx-chip v-for="fruit in fruits" :key="fruit" :fx-styles="outline">{{ fruit }}</fx-chip>
        </fx-chip-group>
      </fx-flex>
    </fx-flex-item>
  </fx-flex>
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

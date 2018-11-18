<template>
  <section>
    <div class="wrapper">
      <fx-chip-group :gutter="10">
        <fx-chip
          v-for="fruit in fruits" :key="fruit" :fx-styles="outline">{{ fruit }}</fx-chip>
      </fx-chip-group>
    </div>
    <div class="wrapper">
      <fx-chip-group align="flex-start" :gutter="10">
        <fx-chip v-for="fruit in fruits" :key="fruit" :fx-styles="outline">{{ fruit }}</fx-chip>
      </fx-chip-group>
    </div>
    <div class="wrapper">
      <fx-chip-group align="flex-end">
        <fx-chip v-for="fruit in fruits" :key="fruit" :fx-styles="outline">{{ fruit }}</fx-chip>
      </fx-chip-group>
    </div>
    <div class="wrapper">
      <fx-chip-group :gutter="10" draggable>
        <fx-chip v-for="fruit in fruits" :key="fruit" :fx-styles="outline">{{ fruit }}</fx-chip>
      </fx-chip-group>
    </div>
  </section>
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
        background: 'none',
        font: 'font-3',
        border: 'border-3'
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 50px 20px;
  background-color: var(--color--fill-1);
  @mixin elevation 2;
}
</style>

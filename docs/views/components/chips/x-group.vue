<template>
  <section>
    <div class="wrapper">
      <fx-chip-group align="center">
        <fx-chip :fx-styles="outline">Apple & Kiwi</fx-chip>
        <fx-chip :fx-styles="outline">Strawberry</fx-chip>
        <fx-chip :fx-styles="outline">Orange</fx-chip>
        <fx-chip :fx-styles="outline">Lime & Mango</fx-chip>
        <fx-chip :fx-styles="outline">Pear</fx-chip>
        <fx-chip :fx-styles="outline">Banana & Lemon</fx-chip>
        <fx-chip :fx-styles="outline">Pineapple</fx-chip>
        <fx-chip :fx-styles="outline">Watermelon</fx-chip>
      </fx-chip-group>
    </div>
    <div class="wrapper">
      <fx-chip-group>
        <fx-chip :fx-styles="outline">Apple & Kiwi</fx-chip>
        <fx-chip :fx-styles="outline">Strawberry</fx-chip>
        <fx-chip :fx-styles="outline">Orange</fx-chip>
        <fx-chip :fx-styles="outline">Lime & Mango</fx-chip>
        <fx-chip :fx-styles="outline">Pear</fx-chip>
        <fx-chip :fx-styles="outline">Banana & Lemon</fx-chip>
        <fx-chip :fx-styles="outline">Pineapple</fx-chip>
        <fx-chip :fx-styles="outline">Watermelon</fx-chip>
      </fx-chip-group>
    </div>
    <div class="wrapper">
      <fx-chip-group align="right">
        <fx-chip :fx-styles="outline">Apple & Kiwi</fx-chip>
        <fx-chip :fx-styles="outline">Strawberry</fx-chip>
        <fx-chip :fx-styles="outline">Orange</fx-chip>
        <fx-chip :fx-styles="outline">Lime & Mango</fx-chip>
        <fx-chip :fx-styles="outline">Pear</fx-chip>
        <fx-chip :fx-styles="outline">Banana & Lemon</fx-chip>
        <fx-chip :fx-styles="outline">Pineapple</fx-chip>
        <fx-chip :fx-styles="outline">Watermelon</fx-chip>
      </fx-chip-group>
    </div>
    <div class="wrapper">
      <fx-chip-group scrollable>
        <fx-chip :fx-styles="outline">Apple & Kiwi</fx-chip>
        <fx-chip :fx-styles="outline">Strawberry</fx-chip>
        <fx-chip :fx-styles="outline">Orange</fx-chip>
        <fx-chip :fx-styles="outline">Lime & Mango</fx-chip>
        <fx-chip :fx-styles="outline">Pear</fx-chip>
        <fx-chip :fx-styles="outline">Banana & Lemon</fx-chip>
        <fx-chip :fx-styles="outline">Pineapple</fx-chip>
        <fx-chip :fx-styles="outline">Watermelon</fx-chip>
      </fx-chip-group>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
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

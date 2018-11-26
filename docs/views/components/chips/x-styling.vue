<template>
  <ChipGroup align="center" :gutter="10">
    <Chip :fx-styles="primary" close raised>Apple</Chip>
    <Chip fx-background="alert" fx-font="font-i" close raised>Banana</Chip>
    <Chip :fx-styles="outline" close>Kiwi</Chip>
    <Chip fx-background="fill-1" fx-font="font-2" raised close>Strawberry</Chip>
    <Chip :height="10" fx-font="font-2">I am really slim</Chip>
    <Chip :height="60" fx-font="font-2" raised>I am really tall</Chip>
  </ChipGroup>
</template>

<script>
export default {
  data () {
    return {
      primary: {
        background: 'primary',
        font: 'font-i'
      },
      outline: {
        background: 'none',
        font: 'info',
        border: 'info'
      }
    }
  }
}
</script>

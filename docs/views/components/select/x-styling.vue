<template>
  <Flex :gutter="50" justify-content="center" wrap>
    <Select label="Default style" :width="width" fixed/>
    <Select label="Secondary colors" :fx-styles="secondary" :width="width" fixed/>
    <Select label="Alert colors" :fx-styles="alert" :width="width" fixed/>
    <Select label="Soft colors" :fx-styles="soft" :width="width" fixed/>
    <Select label="Mixed colors" :fx-styles="mixed" :width="width" fixed/>
  </Flex>
</template>

<script>
export default {
  data () {
    return {
      width: 155,
      mixed: {
        color: 'secondary',
        border: 'warning',
        font: 'primary'
      },
      soft: {
        color: 'font-5',
        border: 'border-4',
        font: 'font-3'
      },
      alert: {
        color: 'alert',
        border: 'alert',
        font: 'alert'
      },
      secondary: {
        color: 'secondary',
        border: 'secondary',
        font: 'secondary'
      }
    }
  }
}
</script>

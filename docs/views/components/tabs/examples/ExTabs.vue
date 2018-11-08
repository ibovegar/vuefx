<template>
  <section>
    <ks-tabs v-model="currentTab">
      <div slot="Template">Lorem ipsum</div>
      <div slot="Javascript">Dolor</div>
      <div slot="Stylesheet">Sit amet</div>
    </ks-tabs>
  </section>
</template>

<script>
export default {
  data () {
    return {
      currentTab: 'Template'
    }
  }
}
</script>

<style scoped>
</style>
